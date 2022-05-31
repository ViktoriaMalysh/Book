import "./tourCart.css";
import { styles } from "../../../animation/styles";
import { StyleRoot } from "radium";
import Footer from "../../../components/footer/Footer";
import { Table } from "semantic-ui-react";

const TourCart = () => {
  return (
    <StyleRoot>
      <div className="tour-cart">
        <div className="tour-cart-header">
          <p className="p-tour-cart-title" style={styles.fadeInDown2s}>
            Tour Cart
          </p>
        </div>

        <div className="tour-cart-block">
          <Table >
            <Table.Header>
              <Table.Row>
                {/* <Table.HeaderCell /> */}
                <Table.HeaderCell>Arguments</Table.HeaderCell>

                <Table.HeaderCell>Arguments</Table.HeaderCell>
                <Table.HeaderCell>Description</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>reset rating</Table.Cell>
                <Table.Cell>None</Table.Cell>
                <Table.Cell>Resets rating to default value</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>set rating</Table.Cell>
                <Table.Cell>rating (integer)</Table.Cell>
                <Table.Cell>
                  Sets the current star rating to specified value
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>

        <div className="tour-cart-footer div-8-end">
          <Footer />
        </div>
      </div>
    </StyleRoot>
  );
};

export default TourCart;
