import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import TuguSimpangLima from "./image/pendukung1.jpeg";
import TarianSaman from "./image/saman.jpg";
import Songket from "./image/songket.jpg";
import Bendera from "./image/benderaKA.png";

function CardInHome() {
  return (
    <Container>
      <CardGroup>
        <Row xs={1} md={2} lg={4} className="g-4">
          <Col>
            <Link
              to="https://www.andalastourism.com/tugu-simpang-lima"
              style={{ textDecoration: "none" }}
            >
             <Card className="card-custom-color">
                <Card.Img
                  variant="top"
                  src={TuguSimpangLima}
                  className="card-img-custom"
                />
                <Card.Body className="card-body-custom">
                  <Card.Title className="text-white">Tugu Simpang Lima</Card.Title>
                  <Card.Text className="text-white">
                    Tugu Simpang Lima di Banda Aceh adalah ikon bersejarah yang
                    terkenal sebagai pusat aksi demonstrasi. Monumen ini, dengan
                    bentuk yang mengadopsi konsep setengah Pintoe Aceh, dianggap
                    sebagai representasi historis dan pusat kota. Desainnya
                    merujuk pada filosofi 5 rukun Islam, dengan harapan dapat
                    mendorong kolaborasi masyarakat dalam membangun kota. Selain
                    itu, tugu ini juga menggambarkan identitas kota dan
                    difungsikan sebagai ruang publik yang memadukan seni,
                    filosofi, dan aspirasi futuristik.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-white">Tugu simpang Lima</small>
                </Card.Footer>
              </Card>
            </Link>
          </Col>
          <Col>
            <Link
              to="https://en.wikipedia.org/wiki/Saman_(dance)"
              style={{ textDecoration: "none" }}
            >
             <Card className="card-custom-color">
                <Card.Img
                  variant="top"
                  src={TarianSaman}
                  className="card-img-custom"
                />
                <Card.Body className="card-body-custom">
                  <Card.Title className="text-white">Tarian saman</Card.Title>
                  <Card.Text className="text-white">
                    Tarian Saman adalah media dakwah yang mencerminkan
                    nilai-nilai agama, sopan santun, pendidikan, kebersamaan,
                    dan kepahlawanan. Dipelopori oleh Syekh Saman, seorang ulama
                    dari Suku Gayo di Aceh Tenggara, tarian ini diakui oleh
                    UNESCO sebagai Warisan Budaya Takbenda pada 24 November
                    2011. Syair dalam tarian menggunakan Bahasa Gayo, dan sering
                    ditampilkan dalam perayaan hari kelahiran Nabi Muhammad SAW.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-white">Tarian saman</small>
                </Card.Footer>
              </Card>
            </Link>
          </Col>
          <Col>
            <Link
              to="https://kumparan.com/kumparanstyle/riwayat-tenun-aceh-digunakan-para-pejuang-aceh-sejak-zaman-penjajahan-1537094711967568774"
              style={{ textDecoration: "none" }}
            >
             <Card className="card-custom-color">
                <Card.Img
                  variant="top"
                  src={Songket}
                  className="card-img-custom"
                />
                <Card.Body className="card-body-custom">
                  <Card.Title className="text-white">Teunun Songket Aceh</Card.Title>
                  <Card.Text className="text-white">
                    Teunun Songket Aceh adalah kerajinan tangan yang dilakukan
                    secara tradisional dan turun temurun dengan menggunakan alat
                    tenun kaki tangan (ATKTP). Riwayatnya kain songket pada masa
                    penjajahan dahulu, digunakan para pejuang Aceh ditenun
                    dengan motif kaligrafi, membentuk bacaan kalimat
                    "Lailahaillallah" inilah yang dinilai menjadi letak kekuatan
                    kain tersebut membangkitkan semangat rakyat Aceh. Budaya
                    menenun telah ada pada masyarakat Aceh dan merupakan warisan
                    budaya yang telah berusia ratusan tahun lamanya, dan
                    menjejaki masa keemaannya pada tahun 1970-an sebagaimana
                    halnya membatik pada masyarakat pulau Jawa.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-white">Kerajinan songket</small>
                </Card.Footer>
              </Card>
            </Link>
          </Col>
          <Col>
            <Link
              to="https://id.wikipedia.org/wiki/Kesultanan_Aceh"
              style={{ textDecoration: "none" }}
            >
              <Card className="card-custom-color">
                <Card.Img
                  variant="top"
                  src={Bendera}
                  className="card-img-custom"
                />
                <Card.Body className="card-body-custom">
                  <Card.Title className="text-white">Kesultanan aceh</Card.Title>
                  <Card.Text className="text-white">
                    Kesultanan Aceh, yang berlangsung dari 1607 hingga 1636,
                    adalah masa kejayaan yang dihargai oleh masyarakatnya.
                    Didirikan oleh Sultan Ali Mughayat Syah pada tahun 1496,
                    kesultanan ini memperluas wilayahnya dengan menaklukkan
                    beberapa kerajaan sekitarnya. Pada puncak kekuasaannya di
                    bawah Sultan Iskandar Muda, Aceh memperluas pengaruhnya dan
                    menaklukkan Pahang serta melakukan serangan ke Melaka pada
                    tahun 1629. Namun, kesultanan mengalami kemunduran setelah
                    itu, terutama seiring dengan meningkatnya kekuasaan Belanda
                    di Sumatera dan terjadinya Perang Saudara Aceh pada abad
                    ke-19.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-white">Kesultanan Aceh</small>
                </Card.Footer>
              </Card>
            </Link>
          </Col>
        </Row>
      </CardGroup>
    </Container>
  );
}

export default CardInHome;
