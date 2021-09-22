import { Card } from "@material-ui/core";
import { Button } from "@material-ui/core";

import { useHistory, useParams } from "react-router-dom";

import RegisterFinish from "../image/img_532221.png";

const Login = () => {
  const history = useHistory();
  const params = useParams();

  return (
    <Card>
      <div className="Card">
        <h1>Bem vindo, {params.name}!!</h1>
        <p>Seu cadastro foi realizado com sucesso!</p>
        <img src={RegisterFinish} alt="Trofeu" />
        <div className="return">
          <Button onClick={() => history.push("/")} variant="contained">
            Voltar
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default Login;
