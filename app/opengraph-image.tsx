import { ImageResponse } from "next/og";

export const alt =
  "Hasitha Dilshan - Software Engineering Portfolio";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "70px",
          background:
            "linear-gradient(135deg, #0a0a0a 0%, #111827 100%)",
          color: "white",
        }}
      >
        {/* Top */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 28,
            color: "#22d3ee",
          }}
        >
          Hasitha.
        </div>

        {/* Main Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              fontSize: 70,
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-3px",
            }}
          >
            Building digital
          </div>

          <div
            style={{
              fontSize: 70,
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-3px",
              color: "#22d3ee",
            }}
          >
            experiences.
          </div>

          <div
            style={{
              marginTop: 30,
              fontSize: 28,
              color: "#a3a3a3",
            }}
          >
            Software Engineering Undergraduate
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            display: "flex",
            gap: 30,
            fontSize: 22,
            color: "#737373",
          }}
        >
          <span>Web Development</span>

          <span>•</span>

          <span>Mobile Development</span>

          <span>•</span>

          <span>UI/UX</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}