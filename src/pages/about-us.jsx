import React, { useState, useEffect } from 'react';
import './../assets/aboutus.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

const teamMembers = [
  {
    id: 1,
    name: 'Lahmar Abdessalem',
    title: 'Founder & CEO',
    description: 'Visionary leader with a passion for AI and biomedical innovation, driving NeuraMedix from its foundation in Algeria.',
    image: 'https://via.placeholder.com/150/007bff/FFFFFF?text=Lahmar',
  }
];

const sectionsData = [
  {
    id: 'who-we-are',
    title: 'Who We Are',
    content: (
      <>
        <p className="intro-paragraph">
          <b>NeuraMedix</b> is a pioneering technology company at the intersection of <b>Artificial Intelligence</b> and <b>biomedical research</b>. Founded in <b>Algeria</b> by <b>Lahmar Abdessalem</b>, we are a team of passionate scientists, engineers, and healthcare innovators committed to revolutionizing how medical discoveries are made and accelerating diagnostic accuracy. Our vision is to empower researchers and healthcare professionals globally with intelligent, intuitive, and reliable AI-powered solutions.
        </p>
        <p>
          Founded on the principle of bridging the gap between cutting-edge AI advancements and critical needs in the medical field, NeuraMedix strives to make complex analyses simpler, faster, and more precise. We believe in building tools that not only save time but also enhance the quality of research, ultimately leading to better patient outcomes.
        </p>

        <h3>Meet Our Team</h3>
        <div className="team-grid">
          {teamMembers.map((member) => (
            <Card key={member.id} raised sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              borderRadius: '10px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
              }
            }}>
              <CardMedia
                component="img"
                image={member.image}
                alt={member.name}
                sx={{
                  width: 150,
                  height: 150,
                  borderRadius: '50%',
                  mt: 3,
                  border: '3px solid #3498db',
                  objectFit: 'cover'
                }}
              />
              <CardContent sx={{ flexGrow: 1, p: 2 }}>
                <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold', color: '#2c3e50' }}>
                  {member.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
                  {member.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {member.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </>
    ),
  },
  {
    id: 'what-we-do',
    title: 'What We Do',
    content: (
      <>
        <p>
          NeuraMedix develops a comprehensive <b>AI-powered software platform specifically designed to accelerate biomedical research</b> and enhance clinical decision-making. We provide cutting-edge tools that automate and optimize complex analytical tasks, empowering scientists and healthcare professionals with unprecedented insights.
        </p>
        <div className="features-grid">
          <Card raised sx={{
            borderTop: '4px solid #3498db',
            borderRadius: '8px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.08)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            '&:hover': {
              transform: 'translateY(-5px)',
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
            }
          }}>
            <CardContent>
              <Typography variant="h5" component="div" sx={{ color: '#2980b9', textAlign: 'center', mb: 2, fontWeight: 600 }}>
                Precision Prediction & Detection
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
                Our sophisticated machine learning models offer capabilities for <b>early and accurate prediction</b> of diseases like lung tumors and heart conditions. We also excel in the <b>detection</b> of anomalies and critical markers in various datasets, aiding in timely interventions and improved diagnostic workflows.
              </Typography>
            </CardContent>
          </Card>

          <Card raised sx={{
            borderTop: '4px solid #3498db',
            borderRadius: '8px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.08)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            '&:hover': {
              transform: 'translateY(-5px)',
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
            }
          }}>
            <CardContent>
              <Typography variant="h5" component="div" sx={{ color: '#2980b9', textAlign: 'center', mb: 2, fontWeight: 600 }}>
                Automated Segmentation & Analysis
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
                We provide highly precise <b>segmentation</b> tools for intricate medical images, enabling the isolation and quantification of specific regions of interest, cells, or tissue structures. This includes automated <b>cell counting</b> and detailed histological analysis using features like our specialized <b>brown pixel counter</b>.
              </Typography>
            </CardContent>
          </Card>

          <Card raised sx={{
            borderTop: '4px solid #3498db',
            borderRadius: '8px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.08)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            '&:hover': {
              transform: 'translateY(-5px)',
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
            }
          }}>
            <CardContent>
              <Typography variant="h5" component="div" sx={{ color: '#2980b9', textAlign: 'center', mb: 2, fontWeight: 600 }}>
                Advanced 3D Visualization & Modeling
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
                Beyond 2D analysis, NeuraMedix offers powerful <b>3D visualizing</b> capabilities. Our platform allows researchers to build interactive 3D models from diverse imaging data, providing a deeper understanding of anatomical structures, tumor growth, or cellular arrangements in a spatially intuitive manner.
              </Typography>
            </CardContent>
          </Card>

          <Card raised sx={{
            borderTop: '4px solid #3498db',
            borderRadius: '8px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.08)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            '&:hover': {
              transform: 'translateY(-5px)',
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
            }
          }}>
            <CardContent>
              <Typography variant="h5" component="div" sx={{ color: '#2980b9', textAlign: 'center', mb: 2, fontWeight: 600 }}>
                Molecular Binding Insights
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
                Our robust <b>molecule-binding predictor</b> helps researchers understand complex molecular interactions with high accuracy, which is vital for accelerating drug discovery, development processes, and understanding disease mechanisms.
              </Typography>
            </CardContent>
          </Card>
        </div>
        <p>
          Each tool is designed with seamless integration into existing lab workflows in mind, providing both visual and quantitative data to support your research with enhanced efficiency and reliability.
        </p>
      </>
    ),
  },
  {
    id: 'our-values',
    title: 'Our Values',
    content: (
      <>
        <p>Our commitment to advancing biomedical research is guided by a core set of values:</p>
        <ul className="values-list">
          <li>
            <span><b>Innovation:</b></span> We continuously push the boundaries of AI to create novel solutions that address the most pressing challenges in healthcare.
          </li>
          <li>
            <span><b>Accuracy:</b></span> We are dedicated to delivering tools that provide highly precise and reliable data, crucial for critical medical decisions.
          </li>
          <li>
            <span><b>Efficiency:</b></span> We strive to save researchers invaluable time, enabling them to focus more on discovery and less on tedious analysis.
          </li>
          <li>
            <span><b>Privacy & Security:</b></span> The confidentiality and integrity of sensitive biomedical data are paramount; we build our platforms with robust security measures.
          </li>
          <li>
            <span><b>Collaboration:</b></span> We believe in partnering with the scientific community to understand their needs and evolve our tools to meet real-world demands.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'testimonials',
    title: 'What They Say About Us',
    content: (
      <>
        <marquee behavior="scroll" direction="left" scrollamount="10" loop="-1">
          <div className="testimonials-grid" style={{ display: 'inline-flex', gap: '30px', padding: '10px 0' }}>
            <Card raised sx={{
              borderRadius: '10px',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
              borderLeft: '5px solid #3498db',
              position: 'relative',
              minWidth: '300px',
              '&::before': {
                content: '"“"',
                fontSize: '4em',
                color: '#c0d9ed',
                position: 'absolute',
                top: '10px',
                left: '20px',
                lineHeight: '1',
                zIndex: 0,
              }
            }}>
              <CardContent>
                <Typography variant="body1" component="p" sx={{ fontStyle: 'italic', mb: 2, position: 'relative', zIndex: 1 }}>
                  "NeuraMedix has revolutionized our lung cancer screening process. The accuracy and speed of their tumor detection tool are simply unparalleled. It's a game-changer for early diagnosis!"
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 'bold', textAlign: 'right' }}>
                  - Dr. Anya Sharma, Lead Oncologist
                </Typography>
              </CardContent>
            </Card>

            <Card raised sx={{
              borderRadius: '10px',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
              borderLeft: '5px solid #3498db',
              position: 'relative',
              minWidth: '300px',
              '&::before': {
                content: '"“"',
                fontSize: '4em',
                color: '#c0d9ed',
                position: 'absolute',
                top: '10px',
                left: '20px',
                lineHeight: '1',
                zIndex: 0,
              }
            }}>
              <CardContent>
                <Typography variant="body1" component="p" sx={{ fontStyle: 'italic', mb: 2, position: 'relative', zIndex: 1 }}>
                  "The brown pixel counter dramatically cut down our analysis time for histological samples. It's incredibly precise and integrates seamlessly into our existing lab protocols."
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 'bold', textAlign: 'right' }}>
                  - Prof. Ben Carter, Head of Pathology Research
                </Typography>
              </CardContent>
            </Card>

            <Card raised sx={{
              borderRadius: '10px',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
              borderLeft: '5px solid #3498db',
              position: 'relative',
              minWidth: '300px',
              '&::before': {
                content: '"“"',
                fontSize: '4em',
                color: '#c0d9ed',
                position: 'absolute',
                top: '10px',
                left: '20px',
                lineHeight: '1',
                zIndex: 0,
              }
            }}>
              <CardContent>
                <Typography variant="body1" component="p" sx={{ fontStyle: 'italic', mb: 2, position: 'relative', zIndex: 1 }}>
                  "As a pharmaceutical researcher, the molecule-binding predictor has become an indispensable tool. It accelerates our understanding of drug interactions, driving our development forward."
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 'bold', textAlign: 'right' }}>
                  - Sarah Chen, Senior Research Scientist
                </Typography>
              </CardContent>
            </Card>
          </div>
        </marquee>
      </>
    ),
  },
  {
    id: 'contact-us',
    title: 'Contact Us',
    content: (
      <>
        <p>
          Have questions, partnership inquiries, or ready to integrate NeuraMedix into your research? We'd love to hear from you.
        </p>
        <div className="contact-details">
          <p>
            <b>Email:</b> <a href="mailto:lahmarabdessalem10@gmail.com">lahmarabdessalem10@gmail.com</a><br />
            <b>Phone:</b> +213 (658) 214-678<br />
          </p>
          <p>
            Alternatively, you can visit our <a href="/contact" className="contact-link-button">Contact Page</a> for a direct inquiry form.
          </p>
        </div>
      </>
    ),
  },
];

const AboutUs = () => {
  const [activeSectionId, setActiveSectionId] = useState(sectionsData[0].id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const activeSection = sectionsData.find(section => section.id === activeSectionId);

  return (
    <div className="about-us-wrapper">
      <aside className="about-us-sidebar">
        <h2 className="sidebar-heading">Our Story</h2>
        <nav className="sidebar-nav">
          {sectionsData.map((section) => (
            <div
              key={section.id}
              className={`nav-item ${activeSectionId === section.id ? 'active' : ''}`}
              onClick={() => setActiveSectionId(section.id)}
            >
              {section.title}
            </div>
          ))}
        </nav>
      </aside>

      <div className="about-us-content">
        <h1>{activeSection.title}</h1>
        {activeSection.content}
      </div>
    </div>
  );
};

export default AboutUs;
