import { Drawer, Button } from 'antd';
import NavItems from './NavItems';

const MobileDrawer = ({ open, onClose, items }: { open: boolean; onClose: () => void; items: any[] }) => {
    return (
        <Drawer placement="left" onClose={onClose} open={open}>
            <div className="flex flex-col items-center gap-8">
                <NavItems items={items} onClose={onClose} />
            </div>
            <div className="flex justify-center items-center gap-10 my-5">
                {/* <Button
                    style={{
                        lineHeight: '24px',
                        height: '48px',
                        width: '174px',
                        backgroundColor: '#F7F7F7',
                        padding: '10px',
                        color: '#0A8FDC',
                        borderRadius: '60px',
                        border: '1px solid #0A8FDC',
                    }}
                    color="primary"
                >
                    Create Account
                </Button> */}
            </div>
        </Drawer>
    );
};

export default MobileDrawer;
