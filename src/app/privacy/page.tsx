import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <div className="flex-grow container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900">Privacy Policy</h1>
        
        <div className="prose prose-lg text-slate-600 max-w-none">
          <p className="mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <p className="mb-6">
            At <strong>Foshan Jishao Doors And Windows</strong>, accessible from https://www.jishaowindows.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Foshan Jishao Doors And Windows and how we use it.
          </p>

          <p className="mb-6">
            If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">Consent</h2>
          <p className="mb-6">
            By using our website, you hereby consent to our Privacy Policy and agree to its terms.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">Information We Collect</h2>
          <p className="mb-6">
            The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
          </p>
          <p className="mb-6">
            If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">How We Use Your Information</h2>
          <p className="mb-4">We use the information we collect in various ways, including to:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Provide, operate, and maintain our website</li>
            <li>Improve, personalize, and expand our website</li>
            <li>Understand and analyze how you use our website</li>
            <li>Develop new products, services, features, and functionality</li>
            <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
            <li>Send you emails</li>
            <li>Find and prevent fraud</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">Log Files</h2>
          <p className="mb-6">
            Foshan Jishao Doors And Windows follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services&apos; analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users&apos; movement on the website, and gathering demographic information.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">Contact Us</h2>
          <p className="mb-6">
            If you have any questions about our Privacy Policy, please contact us:
          </p>
          <ul className="list-none mb-6 space-y-2">
            <li>
              <strong>Email:</strong> <a href="mailto:zengkaoyuanfs@gmail.com" className="text-green-600 hover:underline">zengkaoyuanfs@gmail.com</a>
            </li>
            <li>
              <strong>Phone:</strong> <a href="tel:+8613553338986" className="text-green-600 hover:underline">+86 135 5333 8986</a>
            </li>
            <li>
              <strong>Address:</strong> No. 8, Bo&apos;ai East Road, Nanhai District, Foshan City, Guangdong Province, China, 528200
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </main>
  );
}
