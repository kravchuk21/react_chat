import React from 'react';
import {Form, Input} from "antd";
import {Link} from "react-router-dom";
import {Button, Block} from "components";
import {InfoCircleTwoTone} from "@ant-design/icons";
import {useFormik} from "formik";
import validateForm from "utils/validate";
import {validateField} from "utils/helpers";

const success = false;

const RegisterForm = props => {
    const validate = values => {
        let errors = {};

        validateForm({isAuth: false, values, errors})

        return errors;
    }


    const formik = useFormik({
        initialValues: {
            email: '',
            fullname: '',
            password: '',
            password2: '',
        },
        validate: validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });


    return (
        <div>
            <div className="auth__top">
                <h2>Регистрация</h2>
                <p>Для входа в чат, вам нужно зарегистрироваться</p>
            </div>
            <Block>
                {!success ? (
                    <Form
                        onSubmit={formik.handleSubmit}
                        name="normal_login"
                        className="login-form"
                        initialValues={{remember: true}}
                    >
                        <Form.Item hasFeedback
                                   validateStatus={validateField("email", formik.touched, formik.errors)}
                                   help={!formik.touched.email ? null : formik.errors.email}>
                            <Input size="large"
                                   id="email"
                                   placeholder="E-mail"
                                   value={formik.values.email}
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input size="large"
                                   type="password"
                                   placeholder="Ваше имя"/>
                        </Form.Item>
                        <Form.Item hasFeedback
                                   validateStatus={validateField("password", formik.touched, formik.errors)}
                                   help={!formik.touched.password ? null : formik.errors.password}>
                            <Input size="large"
                                   id="password"
                                   type="password"
                                   placeholder="Пароль"
                                   value={formik.values.password}
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                            />
                        </Form.Item>
                        <Form.Item hasFeedback
                                   validateStatus={validateField("password", formik.touched, formik.errors)}>
                            <Input size="large"
                                   type="password2"
                                   placeholder="Повторить пароль"/>
                        </Form.Item>
                        <Form.Item>
                            <Button onClick={formik.handleSubmit} type="primary"
                                    size="large">ЗАРЕГИСТРИРОВАТЬСЯ</Button>
                        </Form.Item>
                        <Link className="auth__register-link" to="/login">Войти в аккаунт</Link>
                    </Form>
                ) : (
                    <div className="auth__success-block">
                        <InfoCircleTwoTone style={{fontSize: "48px"}}/>
                        <h2>Подтвердите свой аккаунт</h2>
                        <p>На Вашу почту отправлено письмо с ссылкой на подтверждение аккаунта.</p>
                    </div>
                )}
            </Block>
        </div>
    );
}

export default RegisterForm;