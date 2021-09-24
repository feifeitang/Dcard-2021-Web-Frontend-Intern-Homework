import { Link } from "react-router-dom";

const cities = {
  臺北市: "Taipei",
  新北市: "NewTaipei",
  桃園市: "Taoyuan",
  臺中市: "Taichung",
  臺南市: "Tainan",
  高雄市: "Kaohsiung",
  基隆市: "Keelung",
  新竹市: "Hsinchu",
  新竹縣: "HsinchuCounty",
  苗栗縣: "MiaoliCounty",
  彰化縣: "ChanghuaCounty",
  南投縣: "NantouCounty",
  雲林縣: "YunlinCounty",
  嘉義縣: "ChiayiCounty",
  嘉義市: "Chiayi",
  屏東縣: "PingtungCounty",
  宜蘭縣: "YilanCounty",
  花蓮縣: "HualienCounty",
  臺東縣: "TaitungCounty",
  金門縣: "KinmenCounty",
  澎湖縣: "PenghuCounty",
  連江縣: "LienchiangCounty",
}

const Header = ({ title }) => {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Dcard-2021-Web-Frontend-Intern-Homework/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Dcard-2021-Web-Frontend-Intern-Homework/scenicSpot">
                  全部景點
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/scenicSpot"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  縣市景點
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {Object.keys(cities).map((city, index) => {
                    return (
                      <div key={index}>
                        <li>
                          <Link className="dropdown-item" to={`/Dcard-2021-Web-Frontend-Intern-Homework/scenicSpot/${cities[city]}`}>{city}</Link>
                        </li>
                      </div>
                    )
                  })}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
