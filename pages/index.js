import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button,Jumbotron} from 'reactstrap'

export default () => (
    <div>
      <Jumbotron>
        <h1 className="display-3">Calcard Crédito</h1>
        <p className="lead">Aqui você poderá solicitar ou acompanhar o andamento da sua proposta de crédito.</p>
        <hr/>
        <p className="lead">
            <Link href="/propostas">
              <Button color="primary">Ver propostas</Button>
            </Link>
        </p>
      </Jumbotron>
    </div>
  )