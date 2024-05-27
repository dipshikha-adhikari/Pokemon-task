import { CSSProperties, ReactNode } from "react";
import { AppProvider } from "../../context/app-context";

interface ContentProps {
  style?: CSSProperties;
  children: ReactNode;
}

const ContentLayout = ({ style, children }: ContentProps) => {
  return (
    <AppProvider>
      <div className="max-w-7xl px-sm md:px-md lg:px-xl mx-auto" style={style}>
        {children}
      </div>
    </AppProvider>
  );
};

export default ContentLayout;
