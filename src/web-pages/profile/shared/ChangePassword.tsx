'use client';
import React from 'react';
import { Form, Input, Button, Row, Col } from 'antd';

const ChangePassword = () => {
    const onFinish = (values: any) => {
        console.log('Form Submitted:', values);
    };

    return (
        <div
            className="form-container"
            style={{
                backgroundColor: '#fff',
                padding: '20px',
                borderRadius: '12px',
                maxWidth: '600px',
                margin: '0 auto',
            }}
        >
            <Form layout="vertical" onFinish={onFinish}>
                <Row gutter={[16, 16]}>
                    <Col xs={24}>
                        <Form.Item
                            label={<span className="custom-label">Current Password</span>}
                            name="currentPassword"
                            rules={[{ required: true, message: 'Please enter your current password!' }]}
                        >
                            <Input.Password
                                placeholder="Enter current password"
                                style={{ borderRadius: '24px', height: '48px' }}
                            />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={[16, 16]}>
                    <Col xs={24}>
                        <Form.Item
                            label={<span className="custom-label">New Password</span>}
                            name="newPassword"
                            rules={[{ required: true, message: 'Please enter your new password!' }]}
                        >
                            <Input.Password
                                placeholder="Enter new password"
                                style={{ borderRadius: '24px', height: '48px' }}
                            />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={[16, 16]}>
                    <Col xs={24}>
                        <Form.Item
                            label={<span className="custom-label">Confirm Password</span>}
                            name="confirmPassword"
                            dependencies={['newPassword']}
                            rules={[
                                { required: true, message: 'Please confirm your password!' },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('newPassword') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(new Error('The two passwords do not match!'));
                                    },
                                }),
                            ]}
                        >
                            <Input.Password
                                placeholder="Confirm new password"
                                style={{ borderRadius: '24px', height: '48px' }}
                            />
                        </Form.Item>
                    </Col>
                </Row>

                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        style={{
                            backgroundColor: '#0A8FDC',
                            borderRadius: '24px',
                            height: '48px',
                            width: '100%',
                            maxWidth: '300px',
                            margin: '0 auto',
                            display: 'block',
                        }}
                    >
                        Change Password
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default ChangePassword;
