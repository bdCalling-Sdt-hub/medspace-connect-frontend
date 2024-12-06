'use client';
import { useCancelPackagesMutation, useGetMyPackageQuery } from '@/src/redux/features/packages/packagesApi';
import { Button, Modal, notification } from 'antd';
import moment from 'moment';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const MyPackage = () => {
      const { data: myPackage } = useGetMyPackageQuery([]);
      const [cancelPackage] = useCancelPackagesMutation();
      const router = useRouter();

      const handleCancel = async () => {
            Modal.confirm({
                  title: 'Confirm Cancel Booking',
                  content: 'Are you sure you want to cancel your booking?',
                  okText: 'Yes',
                  cancelText: 'No',
                  centered: true,
                  onOk: async () => {
                        try {
                              const res = await cancelPackage(undefined).unwrap();
                              if (res.success) {
                                    notification.success({
                                          message: res.message,
                                    });
                                    router.refresh();
                              }
                        } catch (error: any) {
                              notification.error({
                                    message: error?.data?.message || 'Failed to cancel package',
                              });
                        }
                  },
            });
      };
      return (
            <div className="container mx-auto my-10">
                  {myPackage && (
                        <div className="max-w-lg mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
                              <div className="flex items-center mb-4">
                                    <div className="text-blue-500">
                                          <svg
                                                width={70}
                                                height={70}
                                                viewBox="0 0 70 70"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                          >
                                                <mask id="path-1-inside-1_171_10898" fill="white">
                                                      <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M31.9646 10.8166C34.1038 9.31683 36.9678 9.31683 39.107 10.8166C40.3046 11.6576 41.599 12.0025 43.0523 11.8747C45.6567 11.646 48.137 13.076 49.2415 15.4478C49.8576 16.7694 50.8033 17.7189 52.1287 18.3351C54.5005 19.4357 55.9306 21.916 55.7018 24.5204C55.5739 25.9775 55.9188 27.2681 56.7559 28.4657C58.2596 30.6049 58.2596 33.4689 56.7559 35.6121C55.9188 36.8058 55.5739 38.1001 55.7018 39.5534C55.9304 42.1578 54.5005 44.6381 52.1287 45.7425C50.8032 46.3587 49.8576 47.3044 49.2415 48.6298C48.1369 51.0016 45.6567 52.4316 43.0523 52.2029C41.599 52.0749 40.3046 52.4199 39.107 53.257C36.9678 54.7608 34.1038 54.7608 31.9646 53.257C30.7671 52.4199 29.4766 52.0749 28.0193 52.2029C25.4149 52.4315 22.9346 51.0016 21.834 48.6298C21.2178 47.3044 20.2683 46.3587 18.9468 45.7425C16.575 44.638 15.1449 42.1578 15.3736 39.5534C15.5016 38.1001 15.1566 36.8058 14.3155 35.6121C12.8157 33.4689 12.8157 30.6049 14.3155 28.4657C15.1565 27.2681 15.5014 25.9776 15.3736 24.5204C15.145 21.916 16.5751 19.4357 18.9468 18.3351C20.2683 17.7189 21.2178 16.7732 21.834 15.4478C22.9346 13.076 25.4149 11.646 28.0193 11.8747C29.4764 12.0025 30.7671 11.6577 31.9646 10.8166ZM51.2684 57.6558C51.4932 58.0472 51.3614 58.5472 50.97 58.772C50.5786 58.9967 50.0786 58.8611 49.8538 58.4697L47.8424 54.9895C47.606 54.5981 47.7261 54.0981 48.1137 53.8617C48.5013 53.6253 49.0011 53.7455 49.2415 54.1368H49.2376L51.2684 57.6558ZM34.7162 1.98829C34.7162 1.53493 35.0844 1.16675 35.5379 1.16675C35.9914 1.16675 36.3556 1.53493 36.3556 1.98829V6.03038C36.3556 6.68144 35.6308 7.07286 35.0883 6.7163C34.8636 6.56905 34.7163 6.31708 34.7163 6.03038L34.7162 1.98829ZM19.8033 6.42181C19.5785 6.03038 19.7142 5.5304 20.1056 5.30563C20.497 5.08087 20.993 5.21649 21.2178 5.60792L23.2292 9.0881C23.4696 9.47556 23.3455 9.9795 22.9618 10.2159C22.5742 10.4523 22.0704 10.3283 21.834 9.94067V9.93685L19.8033 6.42181ZM9.10301 17.7227C8.71158 17.4941 8.57596 16.9941 8.80455 16.6027C9.02932 16.2113 9.53312 16.0795 9.92072 16.3042L13.4203 18.3234C14.1877 18.7692 13.7963 19.9705 12.8971 19.8427C12.7963 19.831 12.6956 19.7962 12.6026 19.7419L9.10301 17.7227ZM5.48721 32.8565C5.03385 32.8565 4.66553 32.4922 4.66553 32.0388C4.66553 31.5854 5.03371 31.2171 5.48721 31.2171H9.5293C10.1804 31.2171 10.5718 31.9457 10.2114 32.4922C10.0641 32.7131 9.81217 32.8565 9.5293 32.8565H5.48721ZM9.92072 47.7733C9.5293 47.9943 9.02932 47.8625 8.80455 47.4711C8.57979 47.0796 8.71541 46.5797 9.10684 46.3549L12.587 44.3435C12.9746 44.1071 13.4784 44.2273 13.7148 44.6147C13.9512 45.0023 13.8272 45.5022 13.4396 45.7425L13.4358 45.7387L9.92072 47.7733ZM21.2178 58.4735C20.993 58.8649 20.493 58.9967 20.1016 58.772C19.7102 58.5432 19.5784 58.0434 19.8032 57.652L21.8224 54.1524C22.2873 53.3541 23.5315 53.819 23.33 54.7415C23.3145 54.819 23.2835 54.8965 23.2408 54.9741L21.2178 58.4735ZM49.8538 5.60409C50.0786 5.21267 50.5824 5.07704 50.9738 5.30563C51.3614 5.5304 51.497 6.03421 51.2683 6.42181L49.2609 9.90581C49.0439 10.3011 48.5477 10.4523 48.1525 10.2391C47.7533 10.0222 47.606 9.52601 47.8192 9.12692C47.823 9.11913 47.827 9.11134 47.8346 9.10368L49.8538 5.60409ZM61.1547 16.3044C61.5461 16.0796 62.0461 16.2152 62.2709 16.6067C62.4957 16.9981 62.36 17.4981 61.9686 17.7228L58.4884 19.7304C58.097 19.9706 57.597 19.8466 57.3606 19.463C57.1242 19.0755 57.2443 18.5716 57.6357 18.3352L61.1547 16.3044ZM65.5882 31.2173C66.0416 31.2173 66.4059 31.5854 66.4059 32.0389C66.4059 32.4924 66.0416 32.8567 65.5882 32.8567H61.5461C60.8911 32.8567 60.4997 32.1281 60.8602 31.5854C61.0075 31.3645 61.2594 31.2173 61.5461 31.2173H65.5882ZM61.9724 46.3549C62.3638 46.5797 62.4957 47.0835 62.2709 47.4749C62.0423 47.8663 61.5423 47.9981 61.1509 47.7733L57.6513 45.7503C56.853 45.2892 57.318 44.0452 58.2365 44.2427C58.3178 44.2621 58.3953 44.293 58.4728 44.3357L61.9724 46.3549ZM38.4172 46.041C36.1888 46.4983 33.8829 46.413 31.6932 45.8084C28.7168 44.9791 26.1319 43.2119 24.2793 40.8439C24.4382 37.4799 27.1549 35.2864 30.6467 34.2634C33.472 36.639 37.5994 36.6429 40.4246 34.2634C43.9202 35.2866 46.6331 37.4801 46.796 40.8439C45.0249 43.1033 42.5872 44.8163 39.7813 45.6883L38.4172 46.041ZM43.959 53.8579V69.2513L35.5376 61.4925L27.1123 69.2513V53.8579C27.4611 53.8733 27.8138 53.8657 28.1626 53.8346C29.2321 53.7417 30.1468 53.9857 31.0227 54.602C33.7278 56.5011 37.3436 56.5011 40.0526 54.602C40.9284 53.9859 41.8431 53.7417 42.9088 53.8346C43.2615 53.8657 43.6103 53.8733 43.959 53.8579ZM35.5376 22.4935C32.2473 22.4935 29.5809 25.1598 29.5809 28.4502C29.5809 31.7406 32.2472 34.4068 35.5376 34.4068C38.828 34.4068 41.4941 31.7405 41.4941 28.4502C41.4941 25.1599 38.8279 22.4935 35.5376 22.4935ZM35.5376 17.7461C43.432 17.7461 49.8304 24.1445 49.8304 32.0389C49.8304 34.5037 49.2065 36.8252 48.1059 38.8482C47.2028 35.9067 44.6063 33.9728 41.6648 32.9381C42.5871 31.6825 43.1335 30.1284 43.1335 28.4503C43.1335 24.2532 39.7309 20.8544 35.5376 20.8544C31.3443 20.8544 27.9416 24.2532 27.9416 28.4503C27.9416 30.1284 28.4843 31.6825 29.4104 32.9381C26.4689 33.9728 23.8723 35.9067 22.9693 38.8482C21.8687 36.8252 21.2447 34.5038 21.2447 32.0389C21.2447 24.1445 27.6432 17.7461 35.5376 17.7461ZM35.5376 16.1029C44.3349 16.1029 51.4697 23.2377 51.4697 32.0389C51.4697 40.8402 44.3349 47.971 35.5376 47.971C26.7403 47.971 19.6015 40.8362 19.6015 32.0389C19.6015 23.2416 26.7363 16.1029 35.5376 16.1029Z"
                                                      />
                                                </mask>
                                                <path
                                                      fillRule="evenodd"
                                                      clipRule="evenodd"
                                                      d="M31.9646 10.8166C34.1038 9.31683 36.9678 9.31683 39.107 10.8166C40.3046 11.6576 41.599 12.0025 43.0523 11.8747C45.6567 11.646 48.137 13.076 49.2415 15.4478C49.8576 16.7694 50.8033 17.7189 52.1287 18.3351C54.5005 19.4357 55.9306 21.916 55.7018 24.5204C55.5739 25.9775 55.9188 27.2681 56.7559 28.4657C58.2596 30.6049 58.2596 33.4689 56.7559 35.6121C55.9188 36.8058 55.5739 38.1001 55.7018 39.5534C55.9304 42.1578 54.5005 44.6381 52.1287 45.7425C50.8032 46.3587 49.8576 47.3044 49.2415 48.6298C48.1369 51.0016 45.6567 52.4316 43.0523 52.2029C41.599 52.0749 40.3046 52.4199 39.107 53.257C36.9678 54.7608 34.1038 54.7608 31.9646 53.257C30.7671 52.4199 29.4766 52.0749 28.0193 52.2029C25.4149 52.4315 22.9346 51.0016 21.834 48.6298C21.2178 47.3044 20.2683 46.3587 18.9468 45.7425C16.575 44.638 15.1449 42.1578 15.3736 39.5534C15.5016 38.1001 15.1566 36.8058 14.3155 35.6121C12.8157 33.4689 12.8157 30.6049 14.3155 28.4657C15.1565 27.2681 15.5014 25.9776 15.3736 24.5204C15.145 21.916 16.5751 19.4357 18.9468 18.3351C20.2683 17.7189 21.2178 16.7732 21.834 15.4478C22.9346 13.076 25.4149 11.646 28.0193 11.8747C29.4764 12.0025 30.7671 11.6577 31.9646 10.8166ZM51.2684 57.6558C51.4932 58.0472 51.3614 58.5472 50.97 58.772C50.5786 58.9967 50.0786 58.8611 49.8538 58.4697L47.8424 54.9895C47.606 54.5981 47.7261 54.0981 48.1137 53.8617C48.5013 53.6253 49.0011 53.7455 49.2415 54.1368H49.2376L51.2684 57.6558ZM34.7162 1.98829C34.7162 1.53493 35.0844 1.16675 35.5379 1.16675C35.9914 1.16675 36.3556 1.53493 36.3556 1.98829V6.03038C36.3556 6.68144 35.6308 7.07286 35.0883 6.7163C34.8636 6.56905 34.7163 6.31708 34.7163 6.03038L34.7162 1.98829ZM19.8033 6.42181C19.5785 6.03038 19.7142 5.5304 20.1056 5.30563C20.497 5.08087 20.993 5.21649 21.2178 5.60792L23.2292 9.0881C23.4696 9.47556 23.3455 9.9795 22.9618 10.2159C22.5742 10.4523 22.0704 10.3283 21.834 9.94067V9.93685L19.8033 6.42181ZM9.10301 17.7227C8.71158 17.4941 8.57596 16.9941 8.80455 16.6027C9.02932 16.2113 9.53312 16.0795 9.92072 16.3042L13.4203 18.3234C14.1877 18.7692 13.7963 19.9705 12.8971 19.8427C12.7963 19.831 12.6956 19.7962 12.6026 19.7419L9.10301 17.7227ZM5.48721 32.8565C5.03385 32.8565 4.66553 32.4922 4.66553 32.0388C4.66553 31.5854 5.03371 31.2171 5.48721 31.2171H9.5293C10.1804 31.2171 10.5718 31.9457 10.2114 32.4922C10.0641 32.7131 9.81217 32.8565 9.5293 32.8565H5.48721ZM9.92072 47.7733C9.5293 47.9943 9.02932 47.8625 8.80455 47.4711C8.57979 47.0796 8.71541 46.5797 9.10684 46.3549L12.587 44.3435C12.9746 44.1071 13.4784 44.2273 13.7148 44.6147C13.9512 45.0023 13.8272 45.5022 13.4396 45.7425L13.4358 45.7387L9.92072 47.7733ZM21.2178 58.4735C20.993 58.8649 20.493 58.9967 20.1016 58.772C19.7102 58.5432 19.5784 58.0434 19.8032 57.652L21.8224 54.1524C22.2873 53.3541 23.5315 53.819 23.33 54.7415C23.3145 54.819 23.2835 54.8965 23.2408 54.9741L21.2178 58.4735ZM49.8538 5.60409C50.0786 5.21267 50.5824 5.07704 50.9738 5.30563C51.3614 5.5304 51.497 6.03421 51.2683 6.42181L49.2609 9.90581C49.0439 10.3011 48.5477 10.4523 48.1525 10.2391C47.7533 10.0222 47.606 9.52601 47.8192 9.12692C47.823 9.11913 47.827 9.11134 47.8346 9.10368L49.8538 5.60409ZM61.1547 16.3044C61.5461 16.0796 62.0461 16.2152 62.2709 16.6067C62.4957 16.9981 62.36 17.4981 61.9686 17.7228L58.4884 19.7304C58.097 19.9706 57.597 19.8466 57.3606 19.463C57.1242 19.0755 57.2443 18.5716 57.6357 18.3352L61.1547 16.3044ZM65.5882 31.2173C66.0416 31.2173 66.4059 31.5854 66.4059 32.0389C66.4059 32.4924 66.0416 32.8567 65.5882 32.8567H61.5461C60.8911 32.8567 60.4997 32.1281 60.8602 31.5854C61.0075 31.3645 61.2594 31.2173 61.5461 31.2173H65.5882ZM61.9724 46.3549C62.3638 46.5797 62.4957 47.0835 62.2709 47.4749C62.0423 47.8663 61.5423 47.9981 61.1509 47.7733L57.6513 45.7503C56.853 45.2892 57.318 44.0452 58.2365 44.2427C58.3178 44.2621 58.3953 44.293 58.4728 44.3357L61.9724 46.3549ZM38.4172 46.041C36.1888 46.4983 33.8829 46.413 31.6932 45.8084C28.7168 44.9791 26.1319 43.2119 24.2793 40.8439C24.4382 37.4799 27.1549 35.2864 30.6467 34.2634C33.472 36.639 37.5994 36.6429 40.4246 34.2634C43.9202 35.2866 46.6331 37.4801 46.796 40.8439C45.0249 43.1033 42.5872 44.8163 39.7813 45.6883L38.4172 46.041ZM43.959 53.8579V69.2513L35.5376 61.4925L27.1123 69.2513V53.8579C27.4611 53.8733 27.8138 53.8657 28.1626 53.8346C29.2321 53.7417 30.1468 53.9857 31.0227 54.602C33.7278 56.5011 37.3436 56.5011 40.0526 54.602C40.9284 53.9859 41.8431 53.7417 42.9088 53.8346C43.2615 53.8657 43.6103 53.8733 43.959 53.8579ZM35.5376 22.4935C32.2473 22.4935 29.5809 25.1598 29.5809 28.4502C29.5809 31.7406 32.2472 34.4068 35.5376 34.4068C38.828 34.4068 41.4941 31.7405 41.4941 28.4502C41.4941 25.1599 38.8279 22.4935 35.5376 22.4935ZM35.5376 17.7461C43.432 17.7461 49.8304 24.1445 49.8304 32.0389C49.8304 34.5037 49.2065 36.8252 48.1059 38.8482C47.2028 35.9067 44.6063 33.9728 41.6648 32.9381C42.5871 31.6825 43.1335 30.1284 43.1335 28.4503C43.1335 24.2532 39.7309 20.8544 35.5376 20.8544C31.3443 20.8544 27.9416 24.2532 27.9416 28.4503C27.9416 30.1284 28.4843 31.6825 29.4104 32.9381C26.4689 33.9728 23.8723 35.9067 22.9693 38.8482C21.8687 36.8252 21.2447 34.5038 21.2447 32.0389C21.2447 24.1445 27.6432 17.7461 35.5376 17.7461ZM35.5376 16.1029C44.3349 16.1029 51.4697 23.2377 51.4697 32.0389C51.4697 40.8402 44.3349 47.971 35.5376 47.971C26.7403 47.971 19.6015 40.8362 19.6015 32.0389C19.6015 23.2416 26.7363 16.1029 35.5376 16.1029Z"
                                                      stroke="#0A8FDC"
                                                      strokeWidth={2}
                                                      mask="url(#path-1-inside-1_171_10898)"
                                                />
                                          </svg>
                                    </div>
                                    <div className="ml-4">
                                          <h2 className="text-primary font-bold text-2xl">{myPackage?.name}</h2>
                                          <p className="text-gray-600 font-medium">Package</p>
                                    </div>
                              </div>

                              <div className="mb-4">
                                    <p className="text-4xl font-bold text-secondary">
                                          ${myPackage?.price}/
                                          <span className="text-lg font-normal text-secondary">Month</span>
                                    </p>
                              </div>

                              {myPackage?.subscriptionDate && (
                                    <div className="mb-4">
                                          <p className="text-gray-600">
                                                Start Date :{' '}
                                                <span className="font-medium">{myPackage?.subscriptionDate}</span>
                                          </p>
                                    </div>
                              )}
                              {myPackage?.deadline && (
                                    <div className="mb-4">
                                          <p className="text-gray-600">
                                                Next Renewal Date :{' '}
                                                <span className="font-medium">{myPackage?.deadline}</span>
                                          </p>
                                    </div>
                              )}
                              {/* <div className="text-gray-600 flex justify-between mb-3">
                                    <p>Subscription Management</p>
                                    <button onClick={handleCancel} className="text-red-600">
                                          Cancel
                                    </button>
                              </div> */}

                              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                                    {myPackage?.features.map((feature, index) => {
                                          return <li key={index}>{feature} </li>;
                                    })}
                              </ul>
                              <div className="text-center">
                                    <Link href={'/packages'}>
                                          <Button
                                                shape="round"
                                                className="px-6"
                                                style={{
                                                      height: 42,
                                                      width: '100%',
                                                      backgroundColor: '#0A8FDC',
                                                      fontSize: 16,
                                                      border: 'none',
                                                      color: '#fff',
                                                }}
                                          >
                                                Renew Package
                                          </Button>
                                    </Link>
                              </div>

                              <div className="text-center mt-2">
                                    <Button
                                          onClick={handleCancel}
                                          shape="round"
                                          className="px-6"
                                          style={{
                                                height: 42,
                                                width: '100%',
                                                backgroundColor: '#c10000',
                                                fontSize: 16,
                                                border: 'none',
                                                color: '#fff',
                                          }}
                                    >
                                          Cancel Subscription
                                    </Button>
                              </div>
                        </div>
                  )}
            </div>
      );
};

export default MyPackage;
