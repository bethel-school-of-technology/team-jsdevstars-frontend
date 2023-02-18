import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';

function Faq() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleAccordionClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>What is For Dads, and what does the company do?</Accordion.Header>
        <Accordion.Body>For Dads is a community-driven organization that provides resources, support, and connection to dads and male caregivers all around the world. Our mission is to create a welcoming and inclusive space where dads can find the support and resources they need to thrive in their role as parents. Whether you're a first-time dad or an experienced caregiver, For Dads offers a wealth of information and resources to help you navigate the challenges of fatherhood. From articles and videos on parenting and child development to local meetups and events, For Dads is here to help you build the connections and support you need to be the best dad you can be. At For Dads, we believe that every dad deserves a strong and supportive community, and we are committed to providing the resources and support to help dads thrive in their role as caregivers.
         
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Who can join the For Dads community? </Accordion.Header>
        <Accordion.Body>
          The For Dads community is open to anyone who identifies as a dad, including biological fathers, adoptive fathers, stepfathers, and any other male-identified caregivers.
          The community is not exclusive to fathers only, as For Dads recognizes that many individuals play an important role in the lives of children and families.
          Therefore, grandparents, uncles, brothers, and other family members who are involved in caring for children are welcome to join the community as well.
          The main focus of the community is to provide support, resources, and information for dads and male caregivers, but all individuals who share an interest in this community are welcome to participate.

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Are there any costs associated with joining For Dads, and if so, how much does it cost? </Accordion.Header>
        <Accordion.Body>
          There are no costs associated with joining the For Dads community. Membership is completely free, and there are no hidden fees or charges. We believe that all dads and male caregivers should have access to support and resources, regardless of their financial situation.
          By offering free membership, we aim to create an inclusive and accessible community for all individuals who share an interest in learning and connecting with other dads. So, if you're a dad or male caregiver looking for support, information, and a community of like-minded individuals, we welcome you to join us at For Dads without any financial obligations.

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header> What kind of resources does For Dads provide for its members, and how can I access them? </Accordion.Header>
        <Accordion.Body>For Dads provides a variety of resources for its members, including articles, links to helpful websites, and listings of events and meetups for dads. These resources are designed to help dads and male caregivers connect with others, learn new skills, and find support as they navigate their roles as parents and caregivers.
          To access these resources, members can log in to the For Dads website using their account credentials. Once logged in, they can browse the website to find articles, links, and event listings that are relevant to their interests and needs. Members can also search for specific resources using the website's search function or browse the site's categories to find information on specific topics.
          In addition to online resources, For Dads may also offer in-person events or meetups in some areas. Members can check the website or subscribe to our newsletter to stay up to date on upcoming events and opportunities to connect with other dads in their area.
          Overall, For Dads aims to provide a wide range of resources and support for its members, both online and offline. Whether you're a new dad or an experienced caregiver, we hope that our resources will help you navigate your parenting journey with confidence and support.

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header> Can I contribute content to For Dads, such as articles or videos, and if so, how do I submit them?</Accordion.Header>
        <Accordion.Body>Yes, we welcome contributions from members of the For Dads community! If you have a story to share, a helpful tip, or an interesting perspective on fatherhood or caregiving, we would love to feature your content on our website.
          To submit your content, you can use the "Submit Content" form on our website. This form allows you to upload articles, videos, and other media for our team to review. Please note that we do have some guidelines in place for the types of content we feature, so we recommend reviewing these guidelines before submitting your content.
          We believe that the For Dads community is made stronger by the diverse experiences and perspectives of our members, and we look forward to featuring your contributions on our website. Thank you for your interest in contributing to our community!

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Does For Dads offer any events or meetups for its members, either in-person or online? </Accordion.Header>
        <Accordion.Body>Yes, For Dads does offer events and meetups for its members, both in-person and online. These events provide an opportunity for dads and male caregivers to connect with each other, share experiences, and build community. In-person events may include meetups at local parks or community centers, while online events may include webinars, virtual meetups, and other online gatherings. We believe that these events are an important part of building a supportive and inclusive community for dads and male caregivers, and we encourage all members to participate in these events whenever possible.
          Members can stay up to date on upcoming events by checking the For Dads website or subscribing to our newsletter.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header>How can I connect with other members of the For Dads community, and is there a forum or chat room available? </Accordion.Header>
        <Accordion.Body>
          Connecting with other members of the For Dads community is easy and encouraged! Members can connect with each other by participating in online forums, chat rooms, and discussion groups available on the For Dads website.
          These forums allow members to ask questions, share experiences, and engage in meaningful conversations about fatherhood and caregiving. Members can also connect with each other through private messaging, by following each other's profiles, or by participating in online events or meetups. For those who prefer in-person interaction, For Dads may also host local events or meetups where members can connect and socialize in person. We believe that building connections with other dads and caregivers is an important part of building a strong and supportive community, and we encourage all members to get involved and start connecting today!
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7">
        <Accordion.Header>Does For Dads offer any resources specifically for new fathers or dads-to-be?</Accordion.Header>
        <Accordion.Body>Yes, For Dads offers a wide range of resources specifically tailored to new fathers and dads-to-be. We recognize that becoming a father for the first time can be a challenging and overwhelming experience, and we want to provide the support and resources that new fathers need to navigate this important life transition. Our resources for new fathers may include articles and videos on topics such as preparing for childbirth, caring for a newborn, and adjusting to life as a new parent. We may also offer webinars or online support groups specifically for new fathers or dads-to-be.
           We believe that every dad deserves access to support and resources, and we are committed to providing the information and guidance that new fathers need to thrive in their role as parents.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="8">
        <Accordion.Header>Can For Dads help me connect with other dads in my local area, or is it primarily an online community?</Accordion.Header>
        <Accordion.Body>
        For Dads aims to provide support and resources to dads and male caregivers in both online and in-person settings. While our website and online community are a great way to connect with other dads from all over the world, we understand the value of connecting with dads in your local area as well. To facilitate this, we may organize local meetups and events, or provide a directory of local dad groups and resources that you can connect with. Our goal is to help foster a sense of community and connection among dads and male caregivers, no matter where they live or what their specific needs may be. So whether you prefer to connect online or in person,
         For Dads is here to help you find the support and resources you need to thrive in your role as a parent.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="9">
        <Accordion.Header>Is For Dads affiliated with any other organizations or companies, and if so, which ones? </Accordion.Header>
        <Accordion.Body>
        For Dads is an independent organization and is not affiliated with any other organizations or companies at this time. Our focus is solely on providing a supportive and inclusive community for dads and male caregivers, and we are dedicated to providing the best possible resources and support to our members. While we may collaborate with other organizations or individuals on specific projects or events, we do not have any formal affiliations or partnerships at this time. We are committed to remaining an independent and community-driven organization, and we will continue to work hard to provide the best possible support and resources to dads and male caregivers all around the world.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="10">
        <Accordion.Header> </Accordion.Header>
        <Accordion.Body>


        </Accordion.Body>
      </Accordion.Item>

    </Accordion>
  );
}

export default Faq;
