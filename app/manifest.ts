import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Cornerstone Home Health",
    short_name: "CornerstoneHH",
    description:
      "Skilled nursing, therapy, and compassionate home health care in Rockport, Portland, Corpus Christi, and the Texas Coastal Bend.",
    start_url: "/",
    display: "standalone",
    background_color: "#faf7f2",
    theme_color: "#1a3c5e",
    icons: [
      {
        src: "/images/icon.png",
        sizes: "144x144",
        type: "image/png",
      },
      {
        src: "/images/icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
