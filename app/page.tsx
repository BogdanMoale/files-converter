// imports
import Dropzone from "@/components/dropzone";

export default function Home() {
  return (
    <div className="space-y-16 pb-8">
      {/* Title + Desc */}
      <div className="space-y-6">
        <h1 className="text-3xl md:text-5xl font-medium text-center">
          Supported files:
          <span style={{ fontWeight: "bold", fontStyle: "italic" }}>
            audio, videos and images
          </span>
        </h1>
      </div>

      {/* Upload Box */}
      <Dropzone />
    </div>
  );
}
