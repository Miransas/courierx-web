import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "CourierX — Self-hosted email API for developers";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#050505",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          position: "relative",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            position: "relative",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "12px",
              background: "#0a4a5e",
              border: "2px solid #5cd6f0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#5cd6f0",
              fontSize: "32px",
              fontWeight: 700,
            }}
          >
            ◢
          </div>
          <div
            style={{
              fontSize: "40px",
              color: "#fafafa",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              display: "flex",
            }}
          >
            CourierX
          </div>
        </div>

        <div
          style={{
            fontSize: "84px",
            fontWeight: 800,
            color: "#fafafa",
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            marginTop: "48px",
            position: "relative",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ display: "flex" }}>The open-source</div>
          <div style={{ display: "flex" }}>
            email API for&nbsp;
            <span style={{ color: "#8CFF2E", display: "flex" }}>developers</span>
          </div>
        </div>

        <div
          style={{
            fontSize: "28px",
            color: "#a1a1aa",
            marginTop: "32px",
            position: "relative",
            display: "flex",
          }}
        >
          Self-host transactional emails. Drop-in Resend-compatible API.
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "60px",
            right: "60px",
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            background: "#8CFF2E",
            boxShadow: "0 0 24px 6px rgba(140, 255, 46, 0.6)",
            display: "flex",
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: "60px",
            left: "80px",
            fontSize: "20px",
            color: "#71717a",
            fontFamily: "monospace",
            display: "flex",
          }}
        >
          courierx.io
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
