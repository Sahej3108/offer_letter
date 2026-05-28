// Format date to DD MMM YYYY (e.g., 05 Feb 2024)
function formatDateLong(dateString) {
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    const date = new Date(dateString + 'T00:00:00');
    return date.toLocaleDateString('en-US', options);
}

// Format date to DD/MM/YYYY
function formatDateShort(dateString) {
    const date = new Date(dateString + 'T00:00:00');
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

// Generate Offer Letter
function generateOfferLetter(data) {
    const html = `
    <html>
    <head>
        <style>
            body {
                font-family: 'Calibri', Arial, sans-serif;
                margin: 40px;
                line-height: 1.6;
                color: #000;
            }
            .header-section {
                text-align: center;
                margin-bottom: 30px;
            }
            .logo {
                width: 80px;
                height: auto;
                margin-bottom: 10px;
            }
            .company-name {
                font-size: 14px;
                font-weight: bold;
                letter-spacing: 1px;
                margin-bottom: 3px;
            }
            .company-subtitle {
                font-size: 9px;
                font-weight: bold;
                margin-bottom: 5px;
            }
            .company-details {
                font-size: 8px;
                line-height: 1.4;
                margin-bottom: 10px;
            }
            .certifications {
                font-size: 8px;
                margin-top: 5px;
            }
            .to-section {
                margin-bottom: 20px;
                font-size: 12px;
            }
            .to-label {
                font-weight: normal;
                margin-bottom: 5px;
            }
            .date-section {
                text-align: right;
                font-size: 12px;
                margin-bottom: 20px;
                margin-top: -40px;
            }
            .subject {
                font-weight: bold;
                text-decoration: underline;
                margin-bottom: 10px;
                font-size: 12px;
            }
            .salutation {
                font-size: 12px;
                margin-bottom: 15px;
            }
            .body-text {
                font-size: 12px;
                text-align: justify;
                margin-bottom: 15px;
                line-height: 1.7;
            }
            .closing {
                font-size: 12px;
                margin-top: 20px;
            }
            .signature-line {
                margin-top: 30px;
                margin-bottom: 5px;
                font-size: 12px;
            }
        </style>
    </head>
    <body>
        <div class="header-section">
            <img src="https://takkarpolychem.com/assets/img/logo/takkar-polychem-logo.png" class="logo" alt="Logo">
            <div class="company-name">TAKKAR POLYCHEM PRIVATE LIMITED</div>
            <div class="company-subtitle">(MANUFACTURERS OF SPECIALISED COMPOUNDS AND MASTER BATCHES)</div>
            <div class="company-details">
                PLOT NO 19, ECOTECH - XII, GREATER NOIDA - 201308 (UP)<br>
                CIN NO. - U25209DL2022PTC392480 TAN NO. - DELT20112B<br>
                PHONE: +91-8178526417, Email: info@takkarpolychem.com
            </div>
            <div class="certifications">
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='20'%3E%3Ctext x='5' y='15' font-size='10'%3EAN ISO 9001:2015 CERTIFIED COMPANY%3C/text%3E%3C/svg%3E" alt="ISO Certified">
            </div>
        </div>

        <div class="to-section">
            <div class="to-label">To,</div>
            <div style="margin-top: 5px;">Mr ${data.candidateName},</div>
            <div>${data.address}</div>
        </div>

        <div class="date-section">
            <div>Dated: - ${formatDateLong(data.offerLetterDate)}</div>
        </div>

        <div class="subject">Subject: - Offer Letter for the post of ${data.position}</div>

        <div class="salutation">Dear ${data.candidateName.split(' ')[0]},</div>

        <div class="body-text">
            We are delighted to offer you the opportunity for the position of <strong>${data.position}</strong> with our Company <strong>M/S Takkar Polychem Pvt Ltd</strong>, Plot No 19, Ecotech XII, Greater Noida. This is a full-time role, and you will be reporting to <strong>Mr. Amit Takkar (Director)</strong>.
        </div>

        <div class="body-text">
            Your expected starting date is <strong>${formatDateLong(data.joiningDate)}</strong>. You will be asked to sign a confidentiality and non-disclosure agreement at the beginning of your employment.
        </div>

        <div class="body-text">
            We hope to offer you a challenging and rewarding career with a high level of job satisfaction and opportunities for career development.
        </div>

        <div class="body-text">
            Please sign the duplicate copy of this letter as an acceptance of our offer for the position of <strong>${data.position}</strong>.
        </div>

        <div class="body-text">
            We are all looking forward to your joining our team.
        </div>

        <div class="closing">
            <div style="margin-bottom: 15px;">Best regards,</div>
            <div style="margin-bottom: 5px;">For Takkar Polychem Pvt Ltd.</div>
        </div>

        <div class="signature-line">
            Amit Takkar<br>
            (Director)
        </div>
    </body>
    </html>
    `;
    return html;
}

// Generate Appointment Letter
function generateAppointmentLetter(data) {
    const html = `
    <html>
    <head>
        <style>
            body {
                font-family: 'Calibri', Arial, sans-serif;
                margin: 40px;
                line-height: 1.6;
                color: #000;
                font-size: 11px;
            }
            .to-section {
                margin-bottom: 20px;
                font-size: 11px;
            }
            .to-label {
                font-weight: normal;
                margin-bottom: 5px;
            }
            .subject {
                font-weight: bold;
                text-transform: uppercase;
                margin: 20px 0;
                font-size: 11px;
            }
            .salutation {
                font-size: 11px;
                margin-bottom: 15px;
            }
            .body-text {
                font-size: 11px;
                text-align: justify;
                margin-bottom: 15px;
                line-height: 1.6;
            }
            .section-title {
                font-weight: bold;
                text-decoration: underline;
                margin: 20px 0 10px 0;
                font-size: 11px;
            }
            .section-content {
                font-size: 11px;
                text-align: justify;
                margin-bottom: 15px;
                line-height: 1.6;
            }
            .numbered-list {
                margin-left: 20px;
                font-size: 11px;
                text-align: justify;
                line-height: 1.6;
                margin-bottom: 15px;
            }
            .list-item {
                margin-bottom: 12px;
            }
            .closing {
                font-size: 11px;
                margin-top: 30px;
            }
            .signature-line {
                margin-top: 20px;
                margin-bottom: 5px;
                font-size: 11px;
            }
            .page-break {
                page-break-after: always;
            }
            strong {
                font-weight: bold;
            }
        </style>
    </head>
    <body>
        <div class="to-section">
            <div class="to-label">To,</div>
            <div style="margin-top: 5px;"><strong>Mr. ${data.candidateName}</strong></div>
            <div>${data.address}</div>
            <div>${data.phone}</div>
            <div>${data.email}</div>
        </div>

        <div class="subject">Subject: APPOINTMENT LETTER</div>

        <div class="salutation">Dear Madam,</div>

        <div class="body-text">
            With reference to your application dated <strong>${formatDateLong(data.applicationDate)}</strong> and subsequent interview held on <strong>${formatDateLong(data.interviewDate)}</strong> we are pleased to offer you the post of <strong>${data.position}</strong> in our organization on the following terms conditions.
        </div>

        <div style="margin-bottom: 10px; font-size: 11px;">
            <div style="margin-bottom: 5px;"><strong>Designation : ${data.position}</strong></div>
            <div style="margin-bottom: 5px;"><strong>at Rs. ${data.salary} Per month</strong></div>
            <div><strong>w.e.f ${formatDateLong(data.joiningDate)}</strong></div>
        </div>

        <div class="body-text">
            The details of your remuneration are enumerated in Annexure A, enclosed. The payment of salary and benefits shall be subject to deduction of Income Tax as per the prevailing Income Tax rates and other statutory deductions, as may be required under the applicable Legislation in force from time to time. Your compensation will be renewed under the Company's policies from time to time, at the sole discretion of the Company.
        </div>

        <div class="section-title">PROBATION & CONFIRMATION</div>

        <div class="numbered-list">
            <div class="list-item">
                <strong>1.</strong> You will be on probation for the first 6 months of your employment. You will not be deemed to be confirmed until the letter of confirmation has been issued to you and till such time you shall be on probation on the terms and conditions applicable to the initial probationary period as mentioned in this letter. During or at the expiry of the period of probation or such extended period of probation, your services are liable to be terminated at any time without notice or without assigning any reason or payment of compensation in lieu thereof.
            </div>

            <div class="list-item">
                <strong>2.</strong> After confirmation, your employment can be terminated/discharged by giving one month's notice in writing or one month's salary/wages in lieu thereof by either side. In case you leave your employment without giving notice in the said manner, the management shall have the right to deduct one month's salary or an amount equal to the number of days the notice falls short of money that may be due to you, or shall recover such amount in the manner it deems fit. Further, in case of resignation, the management reserves the right to accept the same with immediate effect.
            </div>

            <div class="list-item">
                <strong>3.</strong> Your place of posting will, at present, be at <strong>Greater Noida</strong>. You are liable to be transferred/posted from your current branch of the company that is {branch}, to any other establishment/branches/sister concerns of the company now in existence or that may come up in future anywhere where the company premises are located without any extra remuneration which may arise as an incidence of service. You are also liable to be transferred from one department to another, from one shift to another shift day or night. Your refusal to carry out such orders will constitute misconduct.
            </div>

            <div class="list-item">
                <strong>4.</strong> Your shift timings start from 9:30 AM and end at 6:30 PM, from Monday to Saturday or as decided by the Management, and your reporting time will be 9.20 AM.
            </div>
        </div>

        <div class="section-title">TERMINATION OF SERVICES</div>

        <div class="numbered-list">
            <div class="list-item">
                <strong>5.</strong> Your services are liable to be terminated without any notice if any information tendered by you in your application for employment on the basis of which this offer is made is found to be false, misleading, or certain facts are found to have been omitted or exaggerated in it.
            </div>

            <div class="list-item">
                <strong>6.</strong> Continued absence from duty for 8 days without express permission in writing of the management of oversty of sectioned leave for 8 days shall tantamount to voluntary abandonment of service, and your name will be struck off from the rolls of the company without any notice to you. You shall faithfully and to the best of your ability perform your duties that may be entrusted to you from time to time by the Management. You will be bound by the rules, regulations and orders promulgated by the Management in relation to the conduct, discipline, and policy matters.
            </div>

            <div class="list-item">
                <strong>7.</strong> In the event of your becoming unfit for performance of your normal duties as a consequence of ill health, accident etc., you are liable to be discharged from services by serving one month's notice by the management or making payment in lieu thereof. Your appointment and its continuance in the organization is subject to you remaining medically, physically and mentally fit. Further, the management reserves the right to get you examined from the medical officer of the company or a Medical Practitioner nominated by the company if the company so chooses, wherein you shall undergo such medical examination, as required. If you are found medically unfit, the management reserves the right to take appropriate action wherein your services may be discharged. Also failure to comply with such instructions shall tantamount initiating to gross misconduct initiating dismissal from service.
            </div>

            <div class="list-item">
                <strong>8.</strong> Your services can be terminated by the Company, without any notice or payment of any kind in lieu of notice, in the following cases:<br><br>
                I. Any incorrect information furnished by you or on suppression of any material information.<br><br>
                II. Any act, which in the opinion of the management is an act of dishonesty, disobedience, or insubordination. Incivility, misappropriation of funds, loss of confidence, acceptance of remuneration or gift or return in case or kind from anyone, gross mismanagement of the affairs of the company/group, gross misconduct, intemperance, irregularity in attendance or other misconduct or neglect of duty or riotous behavior of the person incompetence in the discharge of duty on your part or the breach on your part of any of the terms, conditions or stipulations contained in this agreement or a violation on your part of any of the company's rules/ regulations terms and conditions, standing orders or committing any other misconduct.<br><br>
                III. You being arrested by police for any offence and remaining in custody for more than 3 days or on Police Verification it was found that there is a criminal/civil case pending against you or a civil/criminal complaint has been filed against you.
            </div>

            <div class="list-item">
                <strong>9.</strong> In the event of your committing any act/acts of misconduct, you can be suspended from the services of the organization. While under suspension pending enquiry, you shall be paid subsistence allowance equivalent to 50% of your wages (wages as defined in the Payment of Wages Act) during the first 90 days of your suspension.
            </div>
        </div>

        <div class="section-title">SALARY AND EMOLUMENTS</div>

        <div class="numbered-list">
            <div class="list-item">
                <strong>10.</strong> Your Annual compensation will be as per Annexure A, subject to TDS and other Govt and statutory deductions as applicable from time to time. During the tenure of service, you will keep your emoluments secret from other members of this organization and will treat all information coming to you as strictly confidential and the information contained in all documents and papers and other matters relating to the company will not be divulged by you to any person other than those of the management.
            </div>

            <div class="list-item">
                <strong>11.</strong> By the usual practice of the Company, your salary will be directly credited to your salary account. This mode of payment is employed with a view to keeping confidential the salaries of staff in our organization. You are not to disclose the terms of your employment to any person, including the employees of the Company. All issues in this connection should be referred to the Managing Director or a person designated by the Managing Director.
            </div>
        </div>

        <div class="section-title">SECRECY & NON-SOLICITATION</div>

        <div class="numbered-list">
            <div class="list-item">
                <strong>12.</strong> You shall not, unless authorized in written or required by your obligations in terms hereof, reveal/disclose/disseminate to any person or entity including competitors or persons involved directly or indirectly allied trade, any of the trade secrets, secret or confidential information, information contained in manuals and/or dealings or any information concerning the business, finances, external and internal transactions of the Company and/or its affiliates/Associates/Group Companies, including but not limited to all data including company contacts, processes, policies, strategies involve marketing, advertising, operations; contractual obligations, business expansion (confidential information), which may come to your knowledge and/ or be imparted to you by the Company during your employment hereunder.

                You shall maintain strict confidentiality with respect to all such information and shall not, during your employment or at any time thereafter, disclose, share, use, reproduce, or exploit any Confidential Information for personal gain or the benefit of any third party, except as necessary in the proper performance of your duties and with prior written authorization from the Company. You shall also take all reasonable steps to protect such information from unauthorized access or disclosure.

                Any breach of this confidentiality obligation shall be considered a serious violation of the terms of your employment and may result in disciplinary action, including termination and/or legal proceedings, as deemed appropriate by the Company.

                <strong>This restriction shall survive discharge of your employment with the Company without limit in point of time.</strong>
            </div>

            <div class="list-item">
                <strong>13.</strong> You shall not at any time during the term of your employment with the Company or thereafter, under any circumstances, directly or indirectly solicit or attempt to solicit the Company's and/or any of its subsidiaries and/or affiliates' and/or group companies' personnel to leave the employment of the Company and/or any of its subsidiaries and/or affiliates or apply for employment with any third party or encourage such personnel of the Company of its obligations under this Appointment Letter and/ or any other contact with the Company or adversely impact the ability of the Company to carry out its normal business activities.
            </div>

            <div class="list-item">
                <strong>14.</strong> You have further agreed you shall not engage in soliciting business or allied business that is in any way similar, identical or competitive with the business, activities, services of the Company, or with those customers of the Company with whom you may have had any contact during your employment with the Company and for a period of one year after your employment ceases with the Company.
            </div>
        </div>

        <div class="section-title">GENERAL RULES & REGULATIONS</div>

        <div class="numbered-list">
            <div class="list-item">
                <strong>15.</strong> As a ${data.position}, you are expected to uphold accuracy, confidentiality, and integrity in managing company data and reports. Your conduct must reflect professionalism, attention to detail, and adherence to ethical data handling practices while supporting management with reliable insights for decision-making.
            </div>

            <div class="list-item">
                <strong>16.</strong> You shall further ensure that no act, omission, or behavior on your part causes reputational, legal, or financial harm to the Company. Any act of misconduct, misrepresentation, or violation of the Company's Code of Conduct shall be treated with seriousness and may lead to the initiation of strict disciplinary action.
            </div>

            <div class="list-item">
                <strong>17.</strong> You will be entitled to statutory and service benefits along with any other rules that may come into existence from time to time, as and when applicable as per statutory labor enactments of the state, in fact and as amended from time to time, and as per location/place wherever you are working.
            </div>

            <div class="list-item">
                <strong>18.</strong> You shall report to the authority as designated by the company/his assignee. You shall contribute to the overall activities of the company/group for its smooth running. You shall perform and/or take such responsibilities as arise out of exigencies of the work from time to time.
            </div>

            <div class="list-item">
                <strong>19.</strong> You will be entitled to leave, holidays as per the rules and policies of the management as framed from time to time and applicable to the employees in the office/establishment/department in which you are for the time being posted. You may avail leave due to you with prior sanction of the management and as per state rules. Your application for medical leave should be duly supported by a medical certificate granted by the Medical Officer of the E.S.I.C., if you are covered under the Scheme, and you will be allowed to resume duty on the expiry of the medical leave of a proper illness certificate.
            </div>

            <div class="list-item">
                <strong>20.</strong> You shall be governed by the Rules and Regulations, Standing Orders of the company and orders and instructions issued by the management from time to time. These terms and conditions of this appointment letter supersede any prior oral or written understanding regarding the terms and conditions of employment with the company.
            </div>

            <div class="list-item">
                <strong>21.</strong> Unapproved absences shall be classified as "Leave Without Pay" and shall be deducted from the monthly compensation. For the purposes of this policy, "unapproved absences" are defined as those for which prior approval has not been obtained at least three (3) days in advance, in the case of planned leave and non-emergent circumstances.
            </div>

            <div class="list-item">
                <strong>22.</strong> You shall not resort to a strike or adopt go-slow tactics without giving prior proper and requisite notice to the management. In the event of you resorting to slow tactics, your wages shall be liable for which prior approval has not been obtained at least three (3) days in advance, in the case of planned leave and non-emergent circumstances.
            </div>

            <div class="list-item">
                <strong>23.</strong> You shall not resort to a strike or adopt go-slow tactics without giving prior proper and requisite notice to the management. In the event of you resorting to slow tactics, your wages shall be liable to be deducted to the extent of the shortage in normal work, besides rendering you liable for disciplinary action under the law.
            </div>

            <div class="list-item">
                <strong>24.</strong> You will not refuse any letters/communication delivered to you by hand or by Registered post. Refusal to accept the same shall constitute gross misconduct. Further, in case of your refusal to accept any communication, a copy of the same shall be displayed on the Notice Board of the company, and it shall be deemed to have been served to you in person.
            </div>

            <div class="list-item">
                <strong>25.</strong> You will be a whole-time employee of the company, and during your employment with us, you will not engage yourself in any other work or occupation, directly or indirectly, part-time or full-time, honorary or otherwise. You will also not divulge/disclose or communicate to any person any information concerning the affairs of the company or its clients of which you may become possessed during the period for your employment in the company.
            </div>

            <div class="list-item">
                <strong>26.</strong> You will keep the management informed in writing of any changes in your residential address otherwise all communications intended to be served on you by sending on the last address given by you and It shall be deemed to have been delivered to you and responsibility for non receipt of the same by you will be yours.
            </div>
        </div>

        <div class="section-title">ASSET POLICY</div>

        <div class="numbered-list">
            <div class="list-item">
                <strong>27.</strong> That after completion of the termination process, it is mandated that all company assets, demo kits, or any other company property in your custody must be duly handed over. In the event of non-compliance, management reserves the right to initiate recovery proceedings against you.
            </div>

            <div class="list-item">
                <strong>28.</strong> You shall be responsible for the safekeeping and returning in good order of all the company properties which may be in your possession, custody, care or charge. The management shall have the right to deduct the money value of such things / any advances made to you from your salary/dues and take such other action as it deems fit in the event of your failure to account for such properties / advances whether during the course of service or otherwise.
            </div>
        </div>

        <div class="section-title">POSH POLICY</div>

        <div class="numbered-list">
            <div class="list-item">
                <strong>29.</strong> The Company is committed to providing a safe and respectful work environment for all employees, free from sexual harassment and discrimination.

                As part of this commitment, the company strictly adheres to the provisions of the Sexual Harassment of Women at Workplace (For more details, please refer to the company's detailed POSH policy document, which is available in the employee handbook and on the company intranet.
            </div>
        </div>

        <div class="section-title">RETIREMENT</div>

        <div class="numbered-list">
            <div class="list-item">
                <strong>30.</strong> You will retire from the service of the company on your attaining the age of 58 years.
            </div>
        </div>

        <div class="section-title">DISPUTE SETTLEMENT</div>

        <div class="numbered-list">
            <div class="list-item">
                <strong>31.</strong> All disputes arising in connection with this Appointment Letter shall be settled, if possible, by amicable negotiation of the parties. If the matter is not resolved by amicable negotiations within twenty (20) business days or such later date as may be unanimously agreed upon, then the dispute shall be submitted to arbitration before the sole arbitrator to be appointed by the <strong>Managing Director/Director</strong> in charge of The arbitration shall be conducted in accordance with the provisions of the Arbitration and encourage Conciliation Act 1996, as amended from time to time. Arbitration proceedings shall be held at ____________. The arbitration proceedings shall be held and the award shall be rendered in the English language. The arbitrator will be required to make the award within two (2) months of entering upon the reference unless the time is extended for justifiable reasons. The cost of arbitration, including attorney's fees and expenses of the arbitrator, shall be as per the award.

                Notwithstanding anything to the contrary, this appointment will be treated as having been concluded at Noida, U.P., for all purposes.

                Please sign and return the duplicate copy of this letter of appointment along with a self-attested copy of your last degree evidence's class marks sheet and your Professional Degree Certificate. This is in token of your having agreed and accepted the above terms and conditions.

                We welcome you to this organization and trust we will have a long and mutually beneficial association.

                Hope that this will be the beginning of a long and successful career with us.
            </div>
        </div>

        <div class="closing">
            <div style="margin-bottom: 30px;">
                Authorized Signatory<br>
                <strong>Amit Takkar</strong><br>
                (Director)<br>
                <strong>TAKKAR POLYCHEM PVT. LTD.</strong>
            </div>

            <div>
                <div style="margin-bottom: 40px;">(Signature of Employee)</div>
                <div><strong>Accepted: _____________</strong></div>
            </div>
        </div>

        <div class="page-break"></div>

        <div style="font-weight: bold; margin-bottom: 20px; font-size: 12px;">DECLARATION</div>

        <div style="font-size: 11px; line-height: 1.6; text-align: justify; margin-bottom: 20px;">
            I have carefully read and understood the above terms and conditions contained in this Appointment Letter and also conditions of service and service rules of the Company. The above terms and conditions of service and service rules have also been read out and explained to me and I confirm having accepted the appointment and service rules have also been read out and explained to me and I confirm having accepted the appointment and service rules applicable on the above terms and conditions without any reservations and have received the original Copy of the appointment letter.
        </div>

        <div style="margin-top: 40px; font-size: 11px;">
            <div>Signature .....................................................</div>
            <div>Date .....................................................</div>
        </div>

        <div class="page-break"></div>

        <div style="font-weight: bold; text-decoration: underline; margin-bottom: 20px; font-size: 12px;">ANNEXURE 'B'</div>

        <div style="font-size: 11px; line-height: 1.6; margin-bottom: 20px;">
            <div style="margin-bottom: 10px;">
                As part of the MIS (Management Information Systems) Team at <strong>TAKKAR POLYCHEM PVT. LTD.</strong>, your roles and responsibilities shall include, but not be limited to
            </div>

            <div style="margin-left: 20px;">
                <div style="margin-bottom: 10px;"><strong>1. Data Management and Reporting</strong><br>
                Collecting, organizing, and maintaining data from various departments including Sales, Production, Dispatch, CRM, and Accounts to generate daily, weekly, and monthly MIS reports for internal stakeholders and management.</div>

                <div style="margin-bottom: 10px;"><strong>2. Dashboard Creation and Maintenance</strong><br>
                Designing and updating real-time dashboards using Google Sheets, Excel, or other MIS tools to provide clear visibility into key operational metrics (e.g., production flow, lead status, dispatch tracking, TAT).</div>

                <div style="margin-bottom: 10px;"><strong>3. Automation of Reports and Workflows</strong><br>
                Automating repetitive data tasks through formulas, macros, scripts, or integrations to increase accuracy and reduce manual efforts.</div>

                <div style="margin-bottom: 10px;"><strong>4. Master Data Maintenance</strong><br>
                Creating and managing master databases such as customer master, product master, rate master, and inventory master to ensure accuracy across systems.</div>

                <div style="margin-bottom: 10px;"><strong>5. Error Checking and Data Accuracy</strong><br>
                Regularly verifying reports for data accuracy, identifying discrepancies or inconsistencies, and coordinating with relevant teams to ensure clean and consistent data flow.</div>

                <div style="margin-bottom: 10px;"><strong>6. Support for Departmental Analysis</strong><br>
                Assisting Sales, Production, Accounts, and other departments with custom data reports and insights needed for business reviews, forecasting, budgeting, or audits.</div>

                <div style="margin-bottom: 10px;"><strong>7. Compliance and Documentation</strong><br>
                Maintaining version control of all reports, following company data privacy and backup protocols, and ensuring that MIS practices comply with internal SOPs and audit requirements.</div>

                <div style="margin-bottom: 10px;"><strong>8. Process Mapping and Efficiency Monitoring</strong><br>
                Mapping business processes and highlighting areas for improvement or optimization based on data trends, performance KPIs, and lead time analysis.</div>

                <div style="margin-bottom: 10px;"><strong>9. Interdepartmental Coordination</strong><br>
                Acting as a data bridge between departments, ensuring that every team has access to accurate and up-to-date information required for decision-making.</div>

                <div style="margin-bottom: 10px;"><strong>10. Training and Support</strong><br>
                Providing training to internal team members on data entry best practices, dashboard usage, or report interpretation to improve data literacy across the company.</div>
            </div>
        </div>
    </body>
    </html>
    `;
    return html;
}

// Download PDF
async function downloadPDF(html, filename) {
    const element = document.createElement('div');
    element.innerHTML = html;
    document.body.appendChild(element);

    const opt = {
        margin: 0,
        filename: filename,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    try {
        await html2pdf().set(opt).from(element).save();
    } catch (error) {
        console.error('Error generating PDF:', error);
        alert('Error generating PDF. Please try again.');
    } finally {
        document.body.removeChild(element);
    }
}

// Handle form submission
document.getElementById('letterForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const loading = document.getElementById('loading');
    const successMessage = document.getElementById('successMessage');

    // Get form data
    const data = {
        candidateName: document.getElementById('candidateName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address').value,
        position: document.getElementById('position').value,
        salary: document.getElementById('salary').value,
        joiningDate: document.getElementById('joiningDate').value,
        offerLetterDate: document.getElementById('offerLetterDate').value,
        applicationDate: document.getElementById('applicationDate').value,
        interviewDate: document.getElementById('interviewDate').value
    };

    // Show loading
    loading.classList.add('show');
    successMessage.classList.remove('show');

    // Small delay to show loading state
    setTimeout(async () => {
        try {
            // Generate Offer Letter
            const offerLetterHTML = generateOfferLetter(data);
            await downloadPDF(offerLetterHTML, `${data.candidateName}_Offer_Letter.pdf`);

            // Small delay between downloads
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Generate Appointment Letter
            const appointmentLetterHTML = generateAppointmentLetter(data);
            await downloadPDF(appointmentLetterHTML, `${data.candidateName}_Appointment_Letter.pdf`);

            // Show success message
            loading.classList.remove('show');
            successMessage.textContent = `✓ Successfully generated both letters for ${data.candidateName}!`;
            successMessage.classList.add('show');

            // Auto-hide success message after 5 seconds
            setTimeout(() => {
                successMessage.classList.remove('show');
            }, 5000);

        } catch (error) {
            console.error('Error:', error);
            loading.classList.remove('show');
            alert('Error generating letters. Please try again.');
        }
    }, 500);
});
