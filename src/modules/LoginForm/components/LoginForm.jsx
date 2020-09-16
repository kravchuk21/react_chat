import React from 'react';
import {Form, Input} from "antd";
import {Link} from "react-router-dom";
import {Button, Block} from "components"
import {useFormik} from "formik";
import validateForm from "utils/validate";
import {validateField} from "utils/helpers";

const LoginForm = props => {
    const validate = values => {
        let errors = {};

        validateForm({isAuth: true, values, errors})

        return errors;
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validate: validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });


    return (
        <div>
            <div className="auth__top">
                <h2>Войти в аккаунт</h2>
                <p>Пожалуйста, войдите в аккаунт</p>
            </div>
            <Block>
                <Form name="normal_login"
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
                    <Form.Item>
                        <Button onClick={formik.handleSubmit} type="primary" size="large">ВОЙТИ В АККАУНТ</Button>
                    </Form.Item>
                    <Link className="auth__register-link" to="/register">Зарегистрироваться</Link>
                </Form>
            </Block>
        </div>
    );
}

export default LoginForm;