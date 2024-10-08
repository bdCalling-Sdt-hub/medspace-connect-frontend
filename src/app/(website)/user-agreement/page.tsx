/* eslint-disable react/no-unescaped-entities */
import Subscribe from '@/src/web-pages/home/Subscribe';
import React from 'react';

const UserAgreement = () => {
    return (
        <div>
            <div className="container mx-auto p-6">
                <h1 className="text-3xl font-bold mb-4 text-primary">Medspace Connect Terms of Use</h1>
                <p className="text-gray-600 mb-8">Last Updated: February 27, 2024</p>
                <p className="text-gray-700 mb-6">
                    Welcome to Medspace Connect! Medspace Connect Rental is a MultiVendor Medspace Connect Rental
                    Website (the "Platform"). The following Terms of Use govern your use of the Platform, its services,
                    and the content provided by the Platform. By accessing or using the Platform, you agree to be bound
                    by these Terms of Use.
                </p>

                <ol className=" space-y-6">
                    <li>
                        <h2 className=" text-primary text-2xl font-semibold">1. Acceptance of Terms</h2>
                        <p className="text-gray-700">
                            By accessing or using the Platform, you acknowledge that you have read, understood, and
                            agree to comply with these Terms. If you do not agree with any part of these terms, please
                            refrain from using the Platform.
                        </p>
                    </li>

                    <li>
                        <h2 className=" text-primary text-2xl font-semibold">2. Platform Description</h2>
                        <p className="text-gray-700">
                            The Platform serves as an online marketplace connecting individuals seeking to rent medical
                            spaces (Space Seekers) with those offering medical spaces for rent (Providers). The Platform
                            facilitates transactions between Space Seekers and Providers, providing a platform for
                            listing, searching, and booking medical spaces.
                        </p>
                    </li>

                    <li>
                        <h2 className=" text-primary text-2xl font-semibold">3. User Registration</h2>
                        <p className="text-gray-700">
                            To access certain features of the Platform, you may be required to register and create an
                            account. You agree to provide accurate, current, and complete information during the
                            registration process and to update such information to keep it accurate, current, and
                            complete.
                        </p>
                    </li>

                    <li>
                        <h2 className=" text-primary text-2xl font-semibold">4. Listing and Booking Medical Spaces</h2>
                        <p className="text-gray-700">
                            Providers are responsible for creating accurate and detailed listings for their medical
                            spaces, including pricing, availability, and relevant details. Providers must ensure that
                            their listings comply with all applicable laws and regulations.
                        </p>
                        <h3 className="text-xl text-primary font-semibold mt-4">4.1 Space Seekers</h3>
                        <p className="text-gray-700">
                            Space Seekers must provide accurate information when booking a medical space. Space Seekers
                            are responsible for agreeing to the terms and conditions set by Providers, including
                            cancellation policies.
                        </p>
                    </li>

                    <li>
                        <h2 className=" text-primary text-2xl font-semibold">5. Fees and Payments</h2>
                        <p className="text-gray-700">
                            The Platform may charge transaction fees for successful bookings. Details regarding fees are
                            available in the Platform's fee policy.
                        </p>
                    </li>

                    <li>
                        <h2 className=" text-primary text-2xl font-semibold">6. Content and Intellectual Property</h2>
                        <p className="text-gray-700">
                            Users retain ownership of content they submit to the Platform. By submitting content, users
                            grant the Platform a worldwide, non-exclusive, royalty-free license to use, reproduce,
                            distribute, and display the content.
                        </p>
                        <h3 className="text-xl text-primary font-semibold mt-4">6.2 Platform Content</h3>
                        <p className="text-gray-700">
                            All content provided by the Platform, including text, graphics, logos, and software, is the
                            property of the Platform or its licensors and is protected by intellectual property laws.
                        </p>
                    </li>

                    <li>
                        <h2 className=" text-primary text-2xl font-semibold">7. Prohibited Activities</h2>
                        <p className="text-gray-700">
                            Users agree not to engage in any activities that violate these Terms of Use or applicable
                            laws, including but not limited to fraud, harassment, or misuse of the Platform.
                        </p>
                    </li>

                    <li>
                        <h2 className=" text-primary text-2xl font-semibold">8. Privacy Policy</h2>
                        <p className="text-gray-700">
                            By using the Platform, you agree to the terms outlined in the Platform's{' '}
                            <a href="#" className="text-primary underline">
                                Privacy Policy
                            </a>
                            , which can be found [here].
                        </p>
                    </li>

                    <li>
                        <h2 className=" text-primary text-2xl font-semibold">9. Termination</h2>
                        <p className="text-gray-700">
                            The Platform reserves the right to terminate or suspend user accounts and access to the
                            Platform for violations of these Terms of Use.
                        </p>
                    </li>

                    <li>
                        <h2 className=" text-primary text-2xl font-semibold">10. Dispute Resolution</h2>
                        <p className="text-gray-700">
                            Any disputes arising from the use of the Platform will be resolved through arbitration in
                            accordance with the [Arbitration Rules] of [Arbitration Organization].
                        </p>
                    </li>

                    <li>
                        <h2 className=" text-primary text-2xl font-semibold">11. Changes to Terms</h2>
                        <p className="text-gray-700">
                            The Platform reserves the right to modify or update these Terms of Use at any time. Users
                            will be notified of changes, and continued use of the Platform after such changes
                            constitutes acceptance of the updated terms.
                        </p>
                    </li>

                    <li>
                        <h2 className=" text-primary text-2xl font-semibold">12. Contact Information</h2>
                        <p className="text-gray-700">
                            For questions or concerns regarding these Terms of Use, please contact us at{' '}
                            <a href="#" className="text-primary underline">
                                [Contact Email]
                            </a>
                            .
                        </p>
                    </li>
                </ol>
            </div>
            <Subscribe />
        </div>
    );
};

export default UserAgreement;
