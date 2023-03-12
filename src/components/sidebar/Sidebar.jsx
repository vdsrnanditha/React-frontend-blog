import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
             <span className="sidebarTitle">About Me</span>
            <img src="https://e0.pxfuel.com/wallpapers/35/975/desktop-wallpaper-blood-hand-sword-total-war-arena-promo-arts-for-section-%D0%B8%D0%B3%D1%80%D1%8B-bloody-hand.jpg" alt="hellhv" />
            <p>
            Dark history refers to past events that are violent, disturbing, and morally 
            reprehensible. Examples include wars, genocide, slavery, and human rights violations.
             It is important to acknowledge these events, learn from them, and work towards creating a better future.
            </p>
            <div className="sidebarItem">
            <span className="sidebarTitle">Category</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Wars</li>
                <li className="sidebarListItem">Slavery</li>
                <li className="sidebarListItem">British</li>
                <li className="sidebarListItem">Geopolitics</li>
                <li className="sidebarListItem">Alternate History</li>
                <li className="sidebarListItem">Media</li>
           </ul>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">Follow Us </span>
            <div className="sidebarSocial">
            <a href="https://www.facebook.com/rihanna/about/"><i className="TopIcon fa-brands fa-square-facebook"></i></a>
            <a href="https://twitter.com/rihanna"><i className="TopIcon fa-brands fa-square-twitter"></i></a>
            <a href="https://www.instagram.com/badgalriri/?hl=en"><i className="TopIcon fa-brands fa-square-instagram"></i></a>
            <a href="https://www.youtube.com/channel/UCcgqSM4YEo5vVQpqwN-MaNw"><i className="TopIcon fa-brands fa-square-youtube"></i></a>
            </div>
            </div>
        </div>
    </div>
  )
}
