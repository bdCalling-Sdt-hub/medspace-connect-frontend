import { Form, Input, Button, Checkbox } from 'antd';

const ForgetForm = ({ onFinish }: { onFinish: (values: any) => void }) => {
    return (
        <div className="p-8">
            <div className="space-y-5 mb-5">
                <h2 className="text-3xl text-[#333333] font-semibold text-center">Forgot password ?</h2>
            </div>

            <Form
                layout="vertical"
                name="login"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                className="space-y-4"
            >
                <Form.Item
                    label={<span className="custom-label">Email</span>}
                    name="email"
                    rules={[{ required: true, message: 'Please enter your email!' }]}
                >
                    <Input
                        type="email"
                        placeholder="Enter valid email address"
                        style={{ borderRadius: '24px', height: '48px' }}
                    />
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
                        Send Code
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default ForgetForm;
