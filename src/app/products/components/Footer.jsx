const Footer = () => {
  return (
    <div className="bg-gray-100 pb-7">
      <div className="flex justify-evenly flex-wrap py-11">
        <div className="leading-[40px]">
          <h1 className="text-2xl font-bold">What's new</h1>
          <h1>Surface Pro</h1>
          <h1>Surface Laptop</h1>
          <h1>Microsoft Copilot</h1>
          <h1>Microsoft 365</h1>
          <h1>Explore Microsoft products</h1>
          <h1>Windows 11 apps</h1>
        </div>
        <div className="leading-[40px]">
          <h1 className="text-2xl font-bold">Microsoft Store</h1>
          <h1>Account profile</h1>
          <h1>Download Center</h1>
          <h1>Microsoft Store Support</h1>
          <h1>Return</h1>
          <h1>Order tracking</h1>
        </div>
        <div className="leading-[40px]">
          <h1 className="text-2xl font-bold">Education</h1>
          <h1>Microsoft in education</h1>
          <h1>Device for education</h1>
          <h1>Microsoft Teams for education</h1>
          <h1>Microsoft 365 Education</h1>
          <h1>Office Education</h1>
          <h1>Educator training and development</h1>
          <h1>Deals for students and parents</h1>
          <h1>Azure for student</h1>
        </div>
        <div className="leading-[40px]">
          <h1 className="text-2xl font-bold">Business</h1>
          <h1>Microsoft Cloud</h1>
          <h1>Microsoft Security</h1>
          <h1>Azure</h1>
          <h1>Dynamics 365</h1>
          <h1>Microsoft Advertising</h1>
          <h1>Microsoft 365 Copilot</h1>
          <h1>Microsoft Teams</h1>
        </div>
        <div className="leading-[40px]">
          <h1 className="text-2xl font-bold">Developer & IT</h1>
          <h1>Surface Pro</h1>
          <h1>Surface Laptop</h1>
          <h1>Microsoft Copilot</h1>
          <h1>Microsoft 365</h1>
        </div>
        <div className="leading-[40px]">
          <h1 className="text-2xl font-bold">Company</h1>
          <h1>Surface Developer</h1>
          <h1>Documentation</h1>
          <h1>Microsoft Learn</h1>
          <h1>Microsoft Tech Community</h1>
          <h1>Azure Marketplace</h1>
          <h1>AppSource</h1>
          <h1>Microsoft Power Platform</h1>
          <h1>Visual Studio</h1>
        </div>
          </div>
          

          <div className="flex justify-between px-[100px] flex-wrap">
              {/* left side */}
              <div className="flex gap-5">
                  <div>English</div>
                  <div>Your Privacy Choices</div>
                  <div>Consumer Health Privacy</div>
              </div>

              {/* right side */}
              <div className="flex gap-5">
                  <div>Contact Microsoft</div>
                  <div>Privacy</div>
                  <div>Terms of use</div>
                  <div>Trademarks</div>
                  <div>About our ads</div>
                  <div>Microsoft 2025</div>
              </div>
          </div>
    </div>
  );
};
export default Footer;
