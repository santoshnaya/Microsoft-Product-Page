import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const Last = () => {
  return (
      <div className="mt-11 mx-[100px]">
          <h1>[1] Microsoft Teams license required.</h1>
          <h1>[2] <span className="underline">Forrester Consulting, The Total Economic Impact™ of Microsoft 365 E5, commissioned by Microsoft, August 2023</span>. Results are for a composite organization based on 14 interviewees and 920 respondents from two Forrester surveys as stated in the linked study. As of October 2023, some Microsoft 365 and Office 365 suites <span className="underline">no longer include Microsoft Teams.</span></h1>
          <h1>[3] Microsoft 365 Copilot may not be available for all markets and languages. To purchase, customers must have a qualifying Microsoft 365 plan for <span className="underline">enterprise</span> or <span className="underline">business.</span></h1>
          <h1>[4] After your paid subscription begins, cancellation policies vary based on your status as a new customer, and your product and domain selections on Microsoft. <span className="underline">Learn how to cancel your Microsoft 365 subscription</span>, and cancel it anytime in the Microsoft 365 admin center. When a subscription is canceled, all associated data will be deleted. <span className="underline">Learn more about data retention, deletion, and destruction in Microsoft 365.</span></h1>
          <h1>[5] Copilot Studio capabilities in Microsoft 365 are provided under Copilot Studio terms. <span className="underline">Learn more</span></h1>

          <div className="flex gap-4 ml-14 my-10 items-center">
                  <div className="text-2xl font-semibold">Follow Microsoft</div>
                  <div className="text-2xl"><FaFacebookF />
</div>
                  <div className="text-2xl"><FaXTwitter />
</div>
                  <div className="text-2xl"><FaYoutube />
</div>
              </div>
    </div>
  )
}
export default Last