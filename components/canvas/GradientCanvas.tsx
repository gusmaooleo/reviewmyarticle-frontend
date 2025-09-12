"use client";

import { ShaderGradient, ShaderGradientCanvas } from "@shadergradient/react";

export default function GradientCanvas({ children }: React.PropsWithChildren) {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <ShaderGradientCanvas
        style={{
          width: "100dvw",
          height: "100vh",
          position: "absolute",
          zIndex: -1,
        }}
      >
        <ShaderGradient
          control="query"
          urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1.2&cAzimuthAngle=170&cDistance=3.9&cPolarAngle=70&cameraZoom=1&color1=%23e0ffe6&color2=%23d6fffa&color3=%23ffffff&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=off&lightType=3d&pixelDensity=1&positionX=0&positionY=0.9&positionZ=-0.3&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=45&rotationY=0&rotationZ=0&shader=defaults&type=waterPlane&uAmplitude=0&uDensity=1.2&uFrequency=0&uSpeed=0.1&uStrength=3.4&uTime=0&wireframe=false"
        />
      </ShaderGradientCanvas>
      <main className="flex flex-grow w-screen h-screen"> 
        { children }
      </main>
    </div>
  );
}