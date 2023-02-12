import styles from "@/styles/admin/login.module.scss";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { registerSchema } from "@/schema/index.schema";
import { yupResolver } from "@hookform/resolvers/yup";

const Register = () => {
  const [passwordshow, setPasswordshow] = useState(false);
  const PasswordShowHandler = () => {
    setPasswordshow(!passwordshow);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = (data) => {};
  return (
    <div className={styles.login_container}>
      <div className={styles.login_form}>
        <div className>
          <h3 className={styles.title_lg}>
            welcome to <span>NEXT!</span>
          </h3>
          <div className={styles.text_wrapper}>
            <h4>Sign Up</h4>
            <Form
              className={styles.login_form_fields}
              onSubmit={handleSubmit(onSubmit)}
            >
              <Form.Group className={styles.form_group}>
                <Form.Control
                  {...register("name", { required: true, maxLength: 32 })}
                  className={styles.form_control}
                  placeholder="Name"
                  autoComplete="off"
                />
              </Form.Group>
              {errors?.name && (
                <p className="j-color-red">{errors?.name?.message}</p>
              )}
              <Form.Group className={styles.form_group}>
                <Form.Control
                  {...register("email", { required: true, maxLength: 32 })}
                  className={styles.form_control}
                  placeholder="Email"
                  autoComplete="off"
                />
              </Form.Group>
              {errors?.email && (
                <p className="j-color-red">{errors?.email?.message}</p>
              )}
              <Form.Group className={styles.form_group}>
                <div className="row">
                  <div className={`${styles.hidedivset} col-11`}>
                    <Form.Control
                      type={passwordshow ? "text" : "password"}
                      {...register("password", {
                        required: true,
                      })}
                      autoComplete="off"
                      className={styles.form_control}
                      placeholder="Password"
                    />
                  </div>
                  <div
                    onClick={PasswordShowHandler}
                    className={`${styles.hideimgset} col-1 pt-4 pd-4`}
                  >
                    <span className="d-block me-3">
                      {passwordshow ? <FaRegEyeSlash /> : <FaRegEye />}
                    </span>
                  </div>
                </div>
              </Form.Group>
              {errors?.password && (
                <p className="j-color-red">{errors?.password?.message}</p>
              )}
              <div className={styles.btn_div}>
                <div className={styles.btn}>
                  <Button type="submit" className={styles.btn_yellow}>
                    <a className="btn text-white"> Register </a>
                  </Button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Register };
