import { Form, Input, Button } from 'antd';

const NewPasswordForm = ({ onFinish }: { onFinish: (values: any) => void }) => {
    return (
        <div className="p-8">
            <div className="space-y-5 mb-5">
                <h2 className="text-3xl text-[#333333] font-semibold text-center">Set a new password</h2>
                <p className="text-center text-gray-500 mb-6">
                    Create a new password. Ensure it differs from previous ones for security
                </p>
            </div>

            <Form
                layout="vertical"
                name="newPassword"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                className="space-y-4"
            >
                <Form.Item
                    label={<span className="custom-label">Password</span>}
                    name="newPassword"
                    rules={[{ required: true, message: 'Please enter new password!' }]}
                >
                    <Input.Password placeholder="******" style={{ borderRadius: '24px', height: '48px' }} />
                </Form.Item>
                <Form.Item
                    label={<span className="custom-label">Confirm Password</span>}
                    name="password"
                    rules={[{ required: true, message: 'Please enter confirm password!' }]}
                >
                    <Input.Password placeholder="******" style={{ borderRadius: '24px', height: '48px' }} />
                </Form.Item>

                <Form.Item>
                    <Button
                        htmlType="submit"
                        shape="round"
                        className="px-6"
                        style={{
                            height: '50px',
                            width: '100%',
                            backgroundColor: '#0A8FDC',
                            fontWeight: '500',
                            border: 'none',
                            color: '#fff',
                        }}
                    >
                        Update Password
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default NewPasswordForm;
