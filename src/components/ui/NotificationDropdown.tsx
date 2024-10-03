const NotificationDropdown = () => {
    return (
        <div className="w-[400px] h-fit mx-auto bg-white shadow-md overflow-hidden  p-5">
            <h2 className="text-primary text-2xl font-semibold mb-4">Notification</h2>

            <div className="my-5">
                {/* Notification List */}
                {[...Array(5)].map((notification, index) => (
                    <div key={index} className="flex items-center w-full space-y-2 mb-2">
                        <div className="flex flex-col w-full p-3 rounded-md shadow-md">
                            <h1 className="text-xl text-primaryText font-semibold">Notification topic</h1>
                            <p className="text-primaryText">Short summary for for you, clack and go that page</p>
                            <p className="text-primaryText">20-Dec-2024, 3:00 PM</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NotificationDropdown;
