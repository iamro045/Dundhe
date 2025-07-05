import membersData from "./membersData";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      {/* 🏡 Village Intro */}
      <section className="village-info">
        <h2>🏡 आमचं गाव दुंधे</h2>
        <p>
          दुंधे हे गाव महाराष्ट्र राज्यातील नाशिक जिल्ह्यातील एक प्रगतशील व सुंदर गाव आहे.  
          येथे मुख्यतः शेती व्यवसाय चालतो आणि बहुसंख्य लोक कृषी उत्पादनावर अवलंबून आहेत.  
          गावामध्ये प्राथमिक आरोग्य केंद्र, शाळा, अंगणवाडी आणि संगणक केंद्र यांसारख्या विविध सुविधा उपलब्ध आहेत.  
          सामाजिक ऐक्य, स्वच्छता मोहिमा, महिला बचत गट आणि युवक मंडळे ही गावाची खरी ओळख आहेत.
        </p>

        <p>
          ग्रामपंचायतीमार्फत रस्ते, पाणीपुरवठा, अपंग व वृद्धांसाठी योजना, आणि रोजगार हमी योजनांचा अंमल केला जात आहे.  
          गावात दर महिन्याला ग्रामसभा घेण्यात येते, जिथे नागरिक आपले मत मांडू शकतात.
        </p>

        <p>
          आमच्या गावाचा मुख्य उद्देश म्हणजे - शिक्षण, आरोग्य, आणि स्वच्छता या त्रिसूत्रीवर चालत आदर्श गाव बनवणे.
        </p>
      </section>

      {/* 🎯 Vision & Mission */}
      <section className="vision-mission">
        <h2>🎯 Vision & Mission<br /><span className="marathi-sub">(दृष्टीकोन आणि उद्दिष्टे)</span></h2>
        <div className="vm-box">
          <h3>🌟 Vision / दृष्टीकोन</h3>
          <p>
            दुंधे गावास एक आदर्श, स्वच्छ, शिक्षित आणि सशक्त ग्रामसमूह बनवणे.  
            सर्व नागरिकांना मूलभूत सुविधा देऊन समतोल व सर्वांगीण विकास साधणे.
          </p>
          <h3>🎯 Mission / उद्दिष्ट</h3>
          <p>
            लोकसहभागाने गावच्या प्रत्येक घटकाचा विकास, शिक्षण, आरोग्य, महिला सबलीकरण,  
            डिजिटल ग्रामपंचायत व शाश्वत शेती ह्याचा अंगीकार करणे.
          </p>
        </div>
      </section>

      {/* 👥 Members */}
      <h2>👥 Grampanchayat Members</h2>
      <div className="members-list">
        {membersData.map((member) => (
          <div key={member.id} className="member">
            {member.photo && <img src={member.photo} alt={member.role_en} />}
            <h3>{member.role_en} / {member.role_mr}</h3>
            <p><strong>{member.name}</strong></p>
            <p>📞 {member.phone}</p>
            <p>✉️ {member.email}</p>
          </div>
        ))}
      </div>

      {/* 🗣️ Message from Sarpanch */}
      <section className="sarpanch-message">
        <div className="overlay-content">
          <h2>🗣️ Message from the Sarpanch <br /><span className="marathi">(सरपंचांचे मनोगत)</span></h2>
          <div className="message-card">
            <p className="quote">
              “Our village is not just a place — it's our identity, our pride.  
              We are working towards clean drinking water, better roads, and improved education for every child.  
              Let us all come together to make Dundhe a model village.”
            </p>
            <p className="quote-mr">
              "आपलं गाव म्हणजे केवळ जागा नाही, ती आपली ओळख आहे.  
              गावात स्वच्छ पाणी, चांगले रस्ते आणि शिक्षणाची सोय सर्वांसाठी व्हावी, हा आपला संकल्प आहे.  
              चला, आपण सर्व मिळून आपल्या दुंधे गावाला आदर्श बनवूया."
            </p>
            <p className="sign">— Bob Starc, Sarpanch</p>
          </div>
        </div>
      </section>

      {/* 📸 Gallery */}
      <section className="village-gallery">
        <h2>📸 Our Village Moments<br /><span className="marathi-sub">गावाचे काही सुंदर क्षण</span></h2>
        <div className="gallery-grid">
          <img src="/images/gallery1.jpg" alt="Gram Sabha" />
          <img src="/images/gallery2.jpg" alt="School Function" />
          <img src="/images/gallery3.jpg" alt="Tree Plantation" />
          <img src="/images/gallery4.jpg" alt="Cleanliness Drive" />
        </div>
      </section>
    </div>
  );
}

export default About;
