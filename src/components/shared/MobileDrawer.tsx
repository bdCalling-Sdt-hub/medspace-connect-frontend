import { Drawer, Button } from 'antd';
import NavItems from './NavItems';

const MobileDrawer = ({
    open,
    onClose,
    items,
    setLoginModal,
}: {
    open: boolean;
    onClose: () => void;
    items: any[];
    setLoginModal: any;
}) => {
    return (
        <Drawer placement="left" onClose={onClose} open={open}>
            <div className="flex flex-col items-center gap-8">
                <NavItems items={items} onClose={onClose} />
            </div>
            <div className="flex justify-center items-center gap-10 my-5">
                <Button
                    onClick={() => setLoginModal(true)}
                    type="link"
                    style={{
                        lineHeight: '24px',
                        fontWeight: 500,
                        backgroundColor: 'transparent',
                        color: '#0A8FDC',
                    }}
                >
                    Login
                </Button>
            </div>
        </Drawer>
    );
};

export default MobileDrawer;
