import { Drawer, Button } from 'antd';
import NavItems from './NavItems';

const MobileDrawer = ({
    open,
    onClose,
    items,
    setLoginModal,
    setRegisterModal,
}: {
    open: boolean;
    onClose: () => void;
    items: any[];
    setLoginModal: any;
    setRegisterModal: any;
}) => {
    return (
        <Drawer placement="left" onClose={onClose} open={open}>
            <div className="flex flex-col items-center gap-8">
                <NavItems items={items} onClose={onClose} />
            </div>
            <div className="flex justify-center flex-col items-center gap-2 my-5">
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
                <Button
                    onClick={() => setRegisterModal(true)}
                    style={{
                        border: '1px solid #0A8FDC',
                        lineHeight: '24px',
                        height: '48px',
                        fontWeight: 500,
                        width: '174px',
                        backgroundColor: '#F7F7F7',
                        color: '#0A8FDC',
                        borderRadius: '60px',
                    }}
                >
                    Create Account
                </Button>
            </div>
        </Drawer>
    );
};

export default MobileDrawer;
