import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>404 - Page Not Found | Jerusalem Taxi</title>
        <meta name="robots" content="noindex, follow" />
      </head>
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          backgroundColor: "#0f1d3d",
          color: "#fff",
        }}
      >
        <div style={{ textAlign: "center", padding: "2rem" }}>
          <div style={{ fontSize: "6rem", fontWeight: 900, color: "#f59e0b", lineHeight: 1 }}>404</div>
          <h1 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Page Not Found</h1>
          <p style={{ color: "#94a3b8", marginBottom: "2rem", maxWidth: "400px" }}>
            The page you are looking for does not exist or has been moved.
          </p>
          <Link
            href="/en/"
            style={{
              display: "inline-block",
              backgroundColor: "#f59e0b",
              color: "#0f1d3d",
              fontWeight: 700,
              padding: "0.75rem 2rem",
              borderRadius: "1rem",
              textDecoration: "none",
            }}
          >
            Back to Home
          </Link>
        </div>
      </body>
    </html>
  );
}
