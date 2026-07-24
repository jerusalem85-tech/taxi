export default function RootPage() {
  return (
    <html lang="en" dir="ltr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Jerusalem Taxi | تاكسي القدس | מונית ירושלים</title>
        <script dangerouslySetInnerHTML={{ __html: "window.location.replace('/en/');" }} />
        <noscript>
          <meta httpEquiv="refresh" content="0;url=/en/" />
        </noscript>
      </head>
      <body>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", fontFamily: "sans-serif" }}>
          <p>Redirecting to <a href="/en/">Jerusalem Taxi</a>...</p>
        </div>
      </body>
    </html>
  );
}
