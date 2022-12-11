import React from 'react';

const PolicyandPrivacy = () => {
    return (
        <div>
           


<input type="checkbox" id="PrivacyModal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="PrivacyModal" className="btn btn-sm btn-primary bg-indigo-700 btn-circle absolute right-2 top-2">✕</label>
    <h3 className=" text-indigo-700 f text-2xl text-center">Policy and Privacy</h3>
    <article className="py-4">
      <ul>
        <li className='my-3 f1'>1. Data Protection: The job searching plathtmlForm should ensure that the data of its users is securely stored and transferred. The plathtmlForm should also ensure that data is never shared with any third parties without the user’s explicit consent. 
        </li>
        <li className='my-3 f1'>2. Privacy: The job searching plathtmlForm should provide users with the ability to adjust their privacy settings in order to determine what inhtmlFormation is shared publicly or with potential employers. The plathtmlForm should also provide users with the ability to opt-out of any tracking or usage analytics.
        </li>
        <li className='my-3 f1'>3. Transparency: The job searching plathtmlForm should be transparent about how it uses user data, including what data is collected, how it is used, and how it is stored. The plathtmlForm should also provide users with the ability to access, update, or delete their personal data.</li>
        <li className='my-3 f1'>4. Security: The job searching plathtmlForm should ensure that its systems are secure from unauthorized access. The plathtmlForm should also use encryption to protect user data and regularly monitor htmlFor potential security threats. </li>
        <li className='my-3 f1'>5. Accessibility: The job searching plathtmlForm should be accessible to all users, including those with disabilities. The plathtmlForm should also provide users with the ability to adjust their settings in order to customize their user experience.</li>
      </ul>

 </article>
  </div>
</div>
        </div>
    );
};

export default PolicyandPrivacy;