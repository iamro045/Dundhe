import React from 'react';
import './About.css'; // We will create this CSS file next

// Replace this with the actual path to a photo of your Sarpanch
import sarpanchImage from '../assets/images/sarpanch-placeholder.jpg';

function About() {
  return (
    <div className="about-page-container">
      <div className="page-header">
        <h1>दुंधे गावाबद्दल</h1>
        <p>आपली परंपरा, आपली ओळख, आपली दिशा</p>
      </div>

      <section className="about-section">
        <h2>आमची कहाणी</h2>
        <p>
          <strong>दुंधे</strong> हे गाव मालेगाव तालुक्यात, नाशिक जिल्ह्यात वसलेले एक सुंदर आणि निसर्गरम्य ठिकाण आहे. गावात शेती हा प्रमुख व्यवसाय असून येथील शेतकरी प्रामुख्याने <strong>डाळिंब आणि कांद्याचे</strong> उत्पादन घेतात. ही उत्पादने गुणवत्ता व प्रमाण यासाठी राज्यभर प्रसिद्ध आहेत.
          गावाजवळच वसलेला <strong>दुंधेश्वर डोंगर</strong> हे एक प्रसिद्ध धार्मिक व पर्यटनस्थळ आहे. या डोंगरावर भगवान शंकराचे प्राचीन मंदिर असून, <strong>श्रावण महिन्यात येथे मोठ्या भक्तिभावाने उत्सव</strong> साजरे केला जातो. या काळात हजारो भक्त दर्शनासाठी येथे गर्दी करतात.
          दुंधे गावात लोकांमध्ये <strong>ऐक्य, श्रद्धा आणि संस्कृतीचे</strong> जतन आढळते. गावाच्या प्रगतीसाठी ग्रामपंचायत सक्रिय असून, स्वच्छता, शिक्षण आणि डिजिटल सुविधांवर भर दिला जात आहे.- <strong>रोहित शिंदे </strong>
        </p>
      </section>

      <section className="about-section leadership-section">
        <div className="leader-photo">
          <img src={sarpanchImage} alt="Village Sarpanch" />
        </div>
        <div className="leader-message">
          <h2>सरपंचांचे मनोगत</h2>
          <p>
            "दुंधे गावाच्या अधिकृत संकेतस्थळावर आपले हार्दिक स्वागत करताना मला अत्यंत अभिमान वाटतो. या माध्यमातून आपले गाव अधिक एकत्र येईल आणि प्रशासन अधिक पारदर्शक व सहज उपलब्ध होईल, असा आमचा प्रयत्न आहे. ग्रामविकास आणि प्रत्येक रहिवाश्याच्या कल्याणासाठी आम्ही कटिबद्ध आहोत. जय हिंद!"


          </p>
          <h4>-<strong> श्री रोहित शिंदे, सरपंच</strong></h4>
        </div>
      </section>

      <section className="about-section">
        <h2>आमचे स्थान</h2>
        <p>
          दुंधे हे एक निसर्गरम्य गाव असून ते जिल्हा मुख्यालयापासून ११० किलोमीटर अंतरावर आहे. दुंधेश्वर डोंगराच्या कुशीत वसलेले हे गाव, सभोवतालची हिरवळ, सुपीक शेतशिवार आणि डोंगररांगांमुळे एक वेगळीच ओळख प्राप्त करते. येथे आल्यावर प्रत्येकाला शांती व सौंदर्याचा अनुभव मिळतो.
        </p>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29872.870218839184!2d74.3294198977215!3d20.624422528646853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bde8eee03040909%3A0xadcf3477c9be12ff!2sDundhe%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1753380537399!5m2!1sen!2sin"  // <-- PASTE THE NEW URL HERE
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Village Location Map"
          ></iframe>
        </div>
      </section>
    </div>
  );
}

export default About;