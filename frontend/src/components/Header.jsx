import "../header.css"
import Button from "./simple/Button.jsx";
import InfoSection from "./InfoSection.jsx";
import {useNavigate, useLocation} from "react-router-dom";
import logo from "../logo.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
	faRightFromBracket,
	faRightToBracket,
	faCircleUser,
	faHome,
	faClockRotateLeft,
	faBell
} from "@fortawesome/free-solid-svg-icons";

const Header = ({username}) => {
	const navigate = useNavigate();
	const location = useLocation();

	const navigationHandler = (path) => {
		//we do not want to register multiple instances of the same page in row in the navigation's history
		//so we use navigate only when we want to redirect to another page
		if ((path === '/' && path !== location.pathname) || location.pathname !== path) {
			navigate(path);
		}
		//scroll to the top of the page if the requested page is the same as the current one
		window.scrollTo({top: 0, left: 0, behavior: "smooth"});
	}

	//conditional rendering of the button - if we are logged in, we need a "Log out" button, not a "Sign up" one
	//#TODO the condition should be different once we implement logging in (the one that can't be changed through React Dev panel or in any other way)
	const authButton = username ? (
			<>
				<Button type={"btn"}
				        className={"btn-panel btn-icon"}
				        onClick={() => navigationHandler(`/account/${username}`)} //#TODO this should be substituted with respective logic
				>
					<FontAwesomeIcon className={"icon"} size={"lg"} icon={faCircleUser}/>
				</Button>
				<Button type={"btn"}
				        className={"btn-panel btn-icon"}
				        onClick={() => alert("Notifications")} //#TODO this should be substituted with respective logic
				>
					<FontAwesomeIcon className={"icon"} size={"lg"} icon={faBell}/>
				</Button>
				<Button type={"button"}
				        className={"btn-panel btn-icon"}
				        onClick={() => navigationHandler(`/account/${username}/history`)} //#TODO this should be substituted with respective logic
				>
					<FontAwesomeIcon className={"icon"} size={"lg"} icon={faClockRotateLeft}/>
				</Button>
				<Button type={"button"}
				        className={"btn-panel btn-icon btn-logout"}
				        onClick={() => alert('Logged out')} //#TODO this should be substituted with respective logic
				>
					<FontAwesomeIcon className={"icon"} size={"lg"} icon={faRightFromBracket}/>
				</Button>
			</>
		) :
		<Button type={"button"}
		        className={"btn-panel btn-icon"}
		        onClick={() => navigationHandler("/login")}
		><FontAwesomeIcon className={"icon"} size={"lg"} icon={faRightToBracket}/></Button>

	return (
		<header className={"header"}>
			<div className={"header-top"}>
				<div className="home">
					<Button type={"button"}
					        className={"btn-panel btn-icon"}
					        onClick={() => navigationHandler(`/`)}
					>
						<FontAwesomeIcon className={"icon"} size={"lg"} icon={faHome}/>
					</Button>
				</div>
				<div className="logo">
					<img src={logo} alt="GymEdit Finder Logo"/>
					<span className={"title"}>GYM FINDER</span>
				</div>
				<div className="authentication">
					{authButton}
				</div>
			</div>
		</header>
	)
}

export default Header;