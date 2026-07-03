import "./globals.css";

export const metadata = {
  title: "爪爪星球宠物洗护",
  description: "专业宠物洗护、精修造型、皮毛护理和预约服务。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
