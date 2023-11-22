"use client"
import React from 'react';
import {Button, Input} from "antd";
import {Formik, useFormik} from "formik"
import {Form} from 'formik-antd'
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import {redirect, useRouter} from "next/navigation";
import Link from "next/link";
import * as Yup from 'yup';

const LoginPage = () => {
    const router = useRouter()
    const SignupSchema = Yup.object().shape({
        UserName: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        password: Yup.string()
            .trim()
            .matches(/^[0-9]+$/, "Chỉ bao gồm các số, không được chứa khoảng trắng!")
            .required('Required'),
    });
    const formik = useFormik({
        initialValues: {
            UserName: '',
            password: '',
        },
        // validationSchema: SignupSchema,
        onSubmit: values => {
            //TODO: call API
            router.push('/user')
            // alert(JSON.stringify(values, null, 2));
        },
    });

    const handleLogin = () => {
        formik.handleSubmit();
    }
    return (
        // <Login/>
        <div
            className="bg-white p-4 pt-8 mr-24 border rounded-3xl h-5/6 w-1/3 relative flex flex-col gap-20">
            <Formik
                validationSchema={SignupSchema}
                validateOnChange
                validateOnBlur
                onSubmit={handleLogin}
                initialValues={formik.initialValues}
                render={() => (
                    <Form onFinish={formik.handleSubmit}>
                        <div className="text-center font-bold text-3xl p-12">LOGIN</div>
                        <div className="text-xl flex gap-3 mb-2">
                        </div>
                        <Form.Item name="UserName">
                            <div className="font-medium flex gap-3 mb-2">
                                Email or User Name
                            </div>
                            <Input
                                prefix={<UserOutlined/>}
                                required
                                name="UserName"
                                className="p-2"
                                value={formik.values.UserName}
                                onChange={formik.handleChange}
                                placeholder='Your User Name'
                            />
                        </Form.Item>
                        <Form.Item name="password">
                            <div className="font-medium  flex gap-3 mb-2">
                                Password
                            </div>
                            <Input.Password
                                prefix={<LockOutlined/>}
                                name="password" className="p-2" value={formik.values.password}
                                onChange={formik.handleChange}
                                placeholder='********'/>
                        </Form.Item>
                    </Form>
                )}
            />
            <div className="  flex items-center justify-center w-full mb-24" onClick={handleLogin}>
                <Button className="w-full h-14" style={{background: "#EEF5FF"}}
                        shape="round">
                    Log In</Button>

            </div>
        </div>
    );
};

export default LoginPage;