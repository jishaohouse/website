# 网站首页需求文档 - Foshan Jishao Doors And Windows

## 1. 文档概述
本文档旨在定义 **Foshan Jishao Doors And Windows** 官方网站首页的功能与内容需求。基于品牌资料及图片信息，本网站定位为**外贸型铝合金门窗制造企业官网**，重点展示断桥铝门窗、重型折叠/推拉门等核心产品及“多品类、快交付、专家团队、高效率”的品牌优势。

## 2. 目标受众
- **主要受众**：海外建筑承包商、建材批发商、房地产开发商、室内设计师。
- **次要受众**：个人高端定制客户 (Villa owners)、国内合作伙伴。

## 3. 核心目标
- **品牌展示**：确立 "Aluminum Door And Window Manufacturer" 的专业形象。
- **产品推广**：展示断桥铝 (Broken-bridge)、重型门 (Heavy-duty)、阳光房等高品质产品。
- **询盘转化**：通过 WhatsApp 直接联系及邮箱询盘，促进业务成交。

## 4. 信息架构 (Information Architecture)
1.  **Global Header** (导航栏)
2.  **Hero Section** (首屏焦点)
3.  **Core Advantages** (核心卖点 - 基于图片)
4.  **Product Showcase** (产品展示)
5.  **About Us** (公司简介)
6.  **Contact & Footer** (底部信息)

## 5. 页面详细功能需求

### 5.1 顶部导航 (Header)
- **Logo**：左侧展示 "Foshan Jishao Doors And Windows"。
- **导航菜单**：
    - Home
    - Products (含 Windows, Doors, Sunrooms, Others)
    - About Us
    - Projects
    - Contact Us
- **功能区**：
    - 搜索框
    - **WhatsApp 直连按钮** (高亮，参考图片中的蓝色按钮)
    - 询盘按钮 (Get a Quote)

### 5.2 首屏展示 (Hero Section)
- **背景**：工厂实景或高端别墅应用场景（参考图片风格）。
- **主文案**：
    - **H1**: Aluminum Door And Window Manufacturer
    - **Sub-headline**: We specialize in manufacturing high-quality broken-bridge aluminum doors and windows.
- **CTA 按钮**：
    - "View Products"
    - "Contact Expert Team"

### 5.3 核心卖点 (Key Features)
*基于图片中的四个核心卖点图标进行设计：*
1.  **Multiple Products**: 丰富的产品线，满足多样化需求。
2.  **Quick Delivery**: 快速交付能力。
3.  **Expert Team**: 专业团队支持。
4.  **High Efficiency**: 高效生产与服务。

### 5.4 产品中心 (Product Showcase)
重点展示以下分类（基于图片描述）：
1.  **Aluminum Windows**: Broken-bridge systems, Casement, Sliding.
2.  **Aluminum Doors**: Heavy-duty Folding Doors, Sliding Doors.
3.  **Sunrooms**: 阳光房系列。
4.  **Others**: Screen Meshes (纱网), Shower Enclosures (淋浴房).

### 5.5 公司简介 (About Us)
- **企业名称**：Foshan Jishao Doors And Windows
- **描述文案**：
    "We specialize in manufacturing high-quality broken-bridge aluminum doors and windows, heavy-duty folding and sliding doors, sunrooms, screen meshes, shower enclosures, and more."
    (Navigate Your Villa's Windows and Doors. A different lifestyle to enjoy.)

### 5.6 底部 (Footer)
- **联系信息 (Contact Info)**：
    - **Address**: No. 8, Bo'ai East Road, Nanhai District, Foshan City, Guangdong Province, China, 528200
    - **Phone**: +86 135 5333 8986
    - **Email**: zengkaoyuanfs@gmail.com
- **社交媒体**：WhatsApp, Facebook 等图标。
- **版权信息**：© 2024 Foshan Jishao Doors And Windows.

## 6. UI/UX 设计风格要求
- **配色方案**：参考宣传图，使用 **品牌绿 (Brand Green)** 搭配 **白色/深灰**。绿色体现环保与活力，白色保持页面清爽。
- **视觉风格**：专业、现代、工业风与家居美学结合。
- **图片要求**：使用高清工厂图和别墅实景图。

## 7. 技术栈要求 (Technical Stack Requirements)
- **核心框架**：Next.js (最新版，使用 App Router 架构)。
- **样式框架**：Tailwind CSS (响应式设计，utility-first)。
- **部署平台**：Vercel (利用其 Edge Network 加速全球访问，自动化 CI/CD)。
- **开发语言**：TypeScript (增强代码可维护性与类型安全)。
- **组件库建议**：推荐使用 shadcn/ui 或 Headless UI 配合 Tailwind CSS。
- **SEO优化**：针对 "Broken-bridge aluminum windows", "Heavy-duty folding doors" 等关键词进行优化。
