import '../styles/adminhome.css'
const AdminHome = () => {
    return ( 
        <div className="adminhome">
            
        <div className="card">
          <h1>eBooks</h1>
          <h2>OverDrive</h2>
          <p>Download thousands of card directly to your device, including the hard-to-get ebook Express Collection. Check out up to 20 items and hold up to 15 items.</p>

          <h2>Hoopla Comics</h2>
          <p>Download comics from Marvel, DC, Fantagraphics, Image, and more via Hoopla. Take out each comic for up to 21 days.</p>
        </div>
        <div className="card">
          <h1>Digital Learning</h1>
          <p>LinkedIn Learning (formerly Lynda) is an online educational site that features thousands of courses and video tutorials where you can discover, complete, and track courses related to your field and interests.</p>
        </div>
        <div className="card">
          <h1>Magazines</h1>
          <p>For your convenience, thousands of magazines are available now to borrow through OverDrive and Libby. This includes hot titles like The Economist and Bon Appetit. (Formerly available through RBdigital.)</p>
        </div>
        <div className="card">
          <h1>Newspapers</h1>
          <p>Enjoy complimentary digital access to The New York Times online when you’re at the Library.</p>
          <br />
          <li><a href="">Access the New York Times</a> <b>*In Library access only</b> </li>
          <br />
          <p>Enjoy complimentary digital access to The Wall Street Journal online when you’re at the Main Library.</p>
          <br />
          <li><a href="">Access the New York Times</a> <b>*In Library access only</b> </li>
          <br />
          <p>Enjoy complimentary digital access to PressReader with over 3,500 newspapers in over 60 languages</p>
          <br />
          <li><a href="">Access the New York Times</a> <b>*In Library access only</b> </li>
        </div>
      </div>

     );
}
 
export default AdminHome;