/* eslint-disable react/no-unescaped-entities */
import Subscribe from '@/src/web-pages/home/Subscribe';
import React from 'react';

const TermsAndCondition = () => {
    return (
        <div>
            <div className="container mx-auto my-20">
                <h2 className="text-primary text-2xl font-semibold my-5">Terms & Conditions</h2>
                <div className="container mx-auto">
                    <p className="text-gray-700 mb-4">
                        Your use of the Medspace Connect application ("App") and database of real properties
                        ("Database") signifies your agreement to the Terms and Conditions as set forth below.
                    </p>

                    <h2 className="text-2xl text-primary font-semibold mt-6 mb-4">Privacy: Use of Information</h2>
                    <p className="text-gray-700 mb-4">
                        Medspace Connect does not sell, rent, or trade information about its customers ("Customers") who
                        list their real estate properties in the Database ("Landlords") or who wish to lease real estate
                        properties that are listed in the Database ("Tenants"). When a Customer wishes to list a
                        property with Medspace Connect or a Tenant wishes to search for a property through Medspace
                        Connect to lease a property from a Landlord, we collect certain information regarding the
                        Customers to enable their use of the App and Database and concerning the property and Landlord
                        to make the listing.
                    </p>
                    <p className="text-gray-700 mb-4">
                        Medspace Connect stores the following information on registered Customers: name, address, email,
                        and encrypted password as well as the property listing information. We will not disclose this
                        information to any third party except for the property listings of Landlords who have elected to
                        list them in the Database for prospective Tenants. Medspace Connect limits information provided
                        by Customers to the use for which the information was provided.
                    </p>

                    <h2 className="text-2xl text-primary font-semibold mt-6 mb-4">
                        Property Descriptions; Condition of Premises
                    </h2>
                    <p className="text-gray-700 mb-4">
                        Medspace Connect’s App includes brief descriptions of the real estate office space that may be
                        available to lease or buy. These descriptions are provided by the Landlords who represent that
                        they are the owners or leaseholders of the real estate properties and do not constitute any
                        representation or endorsement by Medspace Connect of the properties or of the Landlord’s right
                        to lease or sell them.
                    </p>
                    <p className="text-gray-700 mb-4">
                        Medspace Connect makes no representation or warranty regarding the accuracy or completeness of
                        the descriptions. All property listings in the Database are unverified by Medspace Connect. The
                        listings in the Database are as given by the Landlords without any inquiry or verification by
                        Medspace Connect. Medspace Connect makes no warranty as to the accuracy of the listing or the
                        condition of the offices or properties in the Database. The descriptions and properties are
                        listed “as is.”
                    </p>

                    <h2 className="text-2xl text-primary font-semibold mt-6 mb-4">
                        License and Access to App and Database
                    </h2>
                    <p className="text-gray-700 mb-4">
                        Medspace Connect grants you a limited license to access and make personal use of the App and
                        Database and not to download or modify it, or any portion of it. This license does not include
                        any resale or commercial use of the App or Database; any derivative use of the App or Database;
                        any downloading or copying of information for the benefit of another party; or any use of data
                        mining, or similar data gathering and extraction tools.
                    </p>
                    <p className="text-gray-700 mb-4">
                        The App and Database and all portions thereof may not be reproduced, duplicated, copied, sold,
                        visited, or otherwise exploited for any commercial purpose without express written consent of
                        Medspace Connect. You may not use any meta tags or any other "hidden text" utilizing Medspace
                        Connect's name or trademarks without the express written consent of Medspace Connect. Any
                        unauthorized use terminates the permission or license granted by Medspace Connect.
                    </p>

                    <h2 className="text-2xl text-primary font-semibold mt-6 mb-4">Accounts</h2>
                    <p className="text-gray-700 mb-4">
                        If you use this site, you are responsible for maintaining the confidentiality of your account
                        and password and for restricting access to your computer, and you agree to accept responsibility
                        for all activities that occur under your account or password. You represent, warrant, and
                        covenant that you are of the age of majority in your state.
                    </p>
                    <p className="text-gray-700 mb-4">
                        If you are under the age of majority, you may use our App and Database only with involvement of
                        a parent or guardian. Medspace Connect reserves the right to refuse service, terminate accounts
                        or cancel donation requests in its sole discretion.
                    </p>

                    <h2 className="text-2xl text-primary font-semibold mt-6 mb-4">Copyright; Trademarks</h2>
                    <p className="text-gray-700 mb-4">
                        The App and Database, including all programming, text, graphics, logos, images, audio clips, and
                        data compilations, are the property of Medspace Connect or its content suppliers and are
                        protected by trademark and copyright laws. Customers may print but may not otherwise download
                        the content of the Database without the express written consent of Medspace Connect, provided
                        that customers maintain all copyright and other notices contained in printed content.
                    </p>

                    <h2 className="text-2xl text-primary font-semibold mt-6 mb-4">Nondiscrimination</h2>
                    <p className="text-gray-700 mb-4">
                        Neither Medspace Connect, nor any Customer will participate in any act that unlawfully
                        discriminates on the basis of race, color, creed, religion, sex, disability, familial status,
                        country of national origin, or any other category protected under federal, state, or local law.
                    </p>

                    <h2 className="text-2xl text-primary font-semibold mt-6 mb-4">Disclaimer</h2>
                    <p className="text-gray-700 mb-4">
                        Use of the App and Database is provided on an “as is” and “as available” basis. Medspace Connect
                        makes no representations or warranties of any kind as to the operation of the App or the
                        accuracy or completeness of the property descriptions and other content included in the
                        Database.
                    </p>

                    <h2 className="text-2xl text-primary font-semibold mt-6 mb-4">Disputes</h2>
                    <p className="text-gray-700 mb-4">
                        By using the App or Database, you agree that the laws of the state of New York, USA, without
                        regard to principles of conflict of laws, will govern these Terms and Conditions of Use and any
                        dispute that might arise between you and Medspace Connect.
                    </p>

                    <p className="text-gray-700 mb-8">
                        For further details, please contact us at: info@medspaceconnect.com.
                    </p>
                </div>
            </div>
            <Subscribe />
        </div>
    );
};

export default TermsAndCondition;
