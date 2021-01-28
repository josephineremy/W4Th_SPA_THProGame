import linux from "../images/linux.svg";
import wii from "../images/wii.png";
import ps4 from "../images/ps4.svg";
import search from "../images/search.svg";
import nintendo from "../images/switch.svg";
import windows from "../images/windows.svg";
import xbox from "../images/xbox.svg";
import android from "../images/android.svg";
import ios from "../images/ios.svg";
import macos from "../images/macos.svg";
import pc from "../images/pc.svg";


const Button = (text) => {
  return `<button>${text}</button>`;
};

const platformsLogos = {
windows:
  `<img src='${windows}' style='height :20px;' class="mr-2">`,
playstation:
  `<img src='${ps4}' style='height :20px;' class="mr-2">`,
playstation2:
  `<img src='${ps4}' style='height :20px;' class="mr-2">`,
playstation3:
  `<img src='${ps4}' style='height :20px;' class="mr-2">`,
playstation4:
  `<img src='${ps4}' style='height :20px;' class="mr-2">`,
psp:
  `<img src='${ps4}' style='height :20px;' class="mr-2">`,
xbox:
  `<img src='${xbox}' style='height :20px;' class="mr-2">`,
xbox360:
  `<img src='${xbox}' style='height :20px;' class="mr-2">`,
ios:
  `<img src='${ios}' style='height :20px;' class="mr-2">`,
linux:
  `<img src='${linux}' style='height :20px;' class="mr-2">`,
nintendo:
  `<img src='${nintendo}' style='height :20px;' class="mr-2">`,
search:
  `<img src='${search}' style='height :20px;' class="mr-2">`,
android:
  `<img src='${android}' style='height :20px;' class="mr-2">`,
ios:
  `<img src='${ios}' style='height :20px;' class="mr-2">`,
mac:
  `<img src='${macos}' style='height :20px;' class="mr-2">`,
macos:
  `<img src='${macos}' style='height :20px;' class="mr-2">`,
pc:
  `<img src='${pc}' style='height :20px;' class="mr-2">`,
wii:
  `<img src='${wii}' style='height :20px;' class="mr-2">`,

};

export { platformsLogos } ;