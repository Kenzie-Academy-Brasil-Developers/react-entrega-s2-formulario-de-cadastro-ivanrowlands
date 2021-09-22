import { Button, TextField } from "@material-ui/core";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";

const FormRegister = () => {
  const history = useHistory();

  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Campo obrigatório")
      .matches(/[a-zA-z]/, "Nome deve conter apenas letras"),
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(8, "Mínimo de 8 dígitos")
      .matches(
        /^((?=.*[^A-Za-z0-9]){1})((?=.*[a-z]){1})((?=.*[A-Z]){1})((?=.*[0-9]){1}).*$/,
        "Senha deve conter ao menos uma letra maiúscula, uma minúscula, um número e um caracter especial!"
      )
      .required("Campo obrigatório"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes")
      .required("Confirme sua senha"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleForm = (data) => {
    history.push(`/${data.name}`);
  };

  return (
    <form onSubmit={handleSubmit(handleForm)}>
      <div className="input">
        <TextField
          label="Nome"
          fullWidth={true}
          margin="normal"
          {...register("name")}
          helperText={errors.name?.message}
          error={!!errors.name}
        />
      </div>
      <div className="input">
        <TextField
          label="E-mail"
          fullWidth={true}
          margin="normal"
          {...register("email")}
          helperText={errors.email?.message}
          error={!!errors.email}
        />
      </div>
      <div className="input">
        <TextField
          label="Senha"
          fullWidth={true}
          margin="normal"
          {...register("password")}
          helperText={errors.password?.message}
          error={!!errors.password}
        />
      </div>
      <div className="input">
        <TextField
          label="Confirmar senha"
          fullWidth={true}
          margin="normal"
          {...register("confirmPassword")}
          helperText={errors.confirmPassword?.message}
          error={!!errors.confirmPassword}
        />
      </div>

      <div className="Submit">
        <Button
          type="submit"
          color="primary"
          variant="contained"
          fullWidth={true}
        >
          CADASTRAR
        </Button>
      </div>
    </form>
  );
};

export default FormRegister;
