// Slim, public-only replacement for the Master App's api/_lib/http.js.
//
// The Master version also pulls in Google-login + Redis employee access (./access.js, ./store.js),
// which the public feedback form never used. This file keeps exactly the three helpers the feedback
// API imports — send, route (method check + same-origin check for non-GET), clientIp — with
// identical behaviour, and drops everything else.

export function send(res, status, body) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Cache-Control", "no-store");
  res.end(JSON.stringify(body));
}

// access: only "public" exists in the standalone app (there is no login).
export function route({ methods, access = "public" }, handler) {
  if (access !== "public") throw new Error('The standalone feedback app only has public routes (access: "public").');
  return async (req, res) => {
    try {
      if (!methods.includes(req.method)) {
        res.setHeader("Allow", methods.join(", "));
        return send(res, 405, { error: "Method not allowed" });
      }
      if (req.method !== "GET") {
        const origin = req.headers.origin;
        if (origin && new URL(origin).host !== req.headers.host) {
          return send(res, 403, { error: "Cross-origin request blocked" });
        }
      }
      await handler(req, res, null);
    } catch (err) {
      console.error(err);
      send(res, 500, { error: "Something went wrong. Please try again." });
    }
  };
}

export function clientIp(req) {
  return String(req.headers["x-forwarded-for"] || req.socket?.remoteAddress || "unknown").split(",")[0].trim();
}
