const Service = require("../../models/Service");
const Program = require("../../models/Program");
const Event = require("../../models/Event");
const Blog = require("../../models/Blog");
const Team = require("../../models/Team");
const Testimonial = require("../../models/Testimonial");
const Newsletter = require("../../models/Newsletter");
const ContactUs = require("../../models/ContactUs");

const mailer = require("../../mailer/index");

async function getServices() {
  try {
    let services = await Service.find().sort({ sortOrder: 1 });
    return services;
  } catch (error) {
    console.log("Error while Reading Services");
    console.log(error);
    return [];
  }
}

async function getPrograms() {
  try {
    let programs = await Program.find().sort({ sortOrder: 1 });
    return programs;
  } catch (error) {
    console.log("Error while Reading Programs");
    console.log(error);
    return [];
  }
}

async function getEvents() {
  try {
    let events = await Event.find().sort({ sortOrder: 1 });
    return events;
  } catch (error) {
    console.log("Error while Reading Events");
    console.log(error);
    return [];
  }
}

async function getBlogs() {
  try {
    let blogs = await Blog.find().sort({ sortOrder: 1 });
    return blogs;
  } catch (error) {
    console.log("Error while Reading Blogs");
    console.log(error);
    return [];
  }
}

async function getTeams() {
  try {
    let teams = await Team.find().sort({ sortOrder: 1 });
    return teams;
  } catch (error) {
    console.log("Error while Reading Team Records");
    console.log(error);
    return [];
  }
}

async function getTestimonials() {
  try {
    let testimonials = await Testimonial.find().sort({ sortOrder: 1 });
    return testimonials;
  } catch (error) {
    console.log("Error while Reading Testimonials Record");
    console.log(error);
    return [];
  }
}

async function home(req, res) {
  res.render("index", {
    services: await getServices(),
    programs: await getPrograms(),
    events: await getEvents(),
    blogs: await getBlogs(),
    teams: await getTeams(),
    testimonials: await getTestimonials(),
    session: req.session,
    title: `${process.env.SITE_NAME} - Home`,
  });
}

async function about(req, res) {
  res.render("about", {
    title: `${process.env.SITE_NAME} - About Us`,
    services: await getServices(),
    teams: await getTeams(),
    session: req.session,
  });
}

async function service(req, res) {
  res.render("service", {
    title: `${process.env.SITE_NAME} - Services`,
    services: await getServices(),
    session: req.session,
  });
}

async function showService(req, res) {
  try {
    let service = await Service.findOne({ _id: req.params._id });
    if (service)
      res.render("show-service", {
        service: service,
        allServices: await getServices(),
        session: req.session,
      });
    else res.redirect("/service");
  } catch (error) {
    console.log(error);
    res.redirect("/service");
  }
}

async function program(req, res) {
  res.render("program", {
    title: `${process.env.SITE_NAME} - Programs`,
    programs: await getPrograms(),
    session: req.session,
  });
}

async function showProgram(req, res) {
  try {
    let program = await Program.findOne({ _id: req.params._id });
    if (program)
      res.render("show-program", {
        program: program,
        allPrograms: await getPrograms(),
        session: req.session,
      });
    else res.redirect("/program");
  } catch (error) {
    console.log(error);
    res.redirect("/program");
  }
}

async function event(req, res) {
  res.render("event", {
    title: `${process.env.SITE_NAME} - Events`,
    events: await getEvents(),
    session: req.session,
  });
}

async function showEvent(req, res) {
  try {
    let event = await Event.findOne({ _id: req.params._id });
    if (event)
      res.render("show-event", {
        event: event,
        allEvents: await getEvents(),
        session: req.session,
      });
    else res.redirect("/event");
  } catch (error) {
    console.log(error);
    res.redirect("/event");
  }
}

async function blog(req, res) {
  res.render("blog", {
    title: `${process.env.SITE_NAME} - Blogs`,
    blogs: await getBlogs(),
    session: req.session,
  });
}

async function showBlog(req, res) {
  try {
    let blog = await Blog.findOne({ _id: req.params._id });
    if (blog)
      res.render("show-blog", {
        blog: blog,
        allBlogs: await getBlogs(),
        session: req.session,
      });
    else res.redirect("/blog");
  } catch (error) {
    res.redirect("/blog");
  }
}

async function team(req, res) {
  res.render("team", {
    title: `${process.env.SITE_NAME} - Team Members`,
    teams: await getTeams(),
    session: req.session,
  });
}

async function testimonial(req, res) {
  res.render("testimonial", {
    title: `${process.env.SITE_NAME} - Guardian's Review`,
    testimonials: await getTestimonials(),
    session: req.session,
  });
}

async function newsletter(req, res) {
  try {
    let data = new Newsletter(req.body);
    await data.save();

    mailer.sendMail(
      {
        from: process.env.MAIL_SENDER,
        to: data.email,
        subject: `Your Newsletter Subscription is Confirmed : Team ${process.env.SITE_NAME}`,
        text: `
            Hello Guardians,
            Your Newsletter Subscription is Confirmed : Team ${process.env.SITE_NAME}
            Now We Can Send Emails Regarding New Blogs, Events and Many more..
      `,
      },
      (error) => {
        if (error) console.log(error);
      }
    );
    res.redirect("/newsletter-confirmation");
  } catch (error) {
    res.redirect("/newsletter-confirmation");
  }
}

function newsletterConfirmation(req, res) {
  res.render("newsletter-confirmation", {
    title: "Newsletter Subscription Successfully",
  });
}

function contactUs(req, res) {
  res.render("contact", {
    title: `${process.env.SITE_NAME} - Contact Us`,
    errorMessage: {},
    message: "",
    data: {},
    session: req.session,
  });
}

async function contactUsStore(req, res) {
  try {
    var data = new ContactUs(req.body);
    await data.save();

    mailer.sendMail(
      {
        from: process.env.MAIL_SENDER,
        to: data.email,
        subject: `Query Has Been Received : Team ${process.env.SITE_NAME}`,
        text: `
            Hello ${data.name}
            Your Contact Us Query Has Been Received.
            Our Team Will Contact You Soon
      `,
      },
      (error) => {
        if (error) console.log(error);
      }
    );

    mailer.sendMail(
      {
        from: process.env.MAIL_SENDER,
        to: process.env.MAIL_SENDER,
        subject: "New Contact Us Query Received",
        html: `
             <h1>New Contact Us Query Received</h1>
             <table border="2px" cellpadding="10px" cellspacing="0px">
                <tbody>
                   <tr>
                     <th>Name</th>
                     <td>${data.name}</td>
                   </tr>
                   <tr>
                     <th>Email</th>
                     <td>${data.email}</td>
                   </tr>
                   <tr>
                     <th>Phone</th>
                     <td>${data.phone}</td>
                   </tr>
                   <tr>
                     <th>Subject</th>
                     <td>${data.subject}</td>
                   </tr>
                   <tr>
                     <th>Message</th>
                     <td>${data.message}</td>
                   </tr>
                   <tr>
                     <th>Date</th>
                     <td>${data.createdAt}</td>
                   </tr>
                </tbody>
             </table>
      `,
      },
      (error) => {
        if (error) console.log(error);
      }
    );

    res.render("contact", {
      title: `${process.env.SITE_NAME} - Contact Us`,
      errorMessage: {},
      message:
        "Thanks To Share Your Query With Us. Our Team Will Contact You Soon",
      data: {},
      session: req.session,
    });
  } catch (error) {
    let errorMessage = {};
    error.errors?.name ? (errorMessage.name = error.errors.name.message) : null;
    error.errors?.email
      ? (errorMessage.email = error.errors.email.message)
      : null;
    error.errors?.phone
      ? (errorMessage.phone = error.errors.phone.message)
      : null;
    error.errors?.subject
      ? (errorMessage.subject = error.errors.subject.message)
      : null;
    error.errors?.message
      ? (errorMessage.message = error.errors.message.message)
      : null;
    res.render("contact", {
      title: `${process.env.SITE_NAME} - Contact Us`,
      errorMessage: errorMessage,
      message: "",
      data: {},
      session: req.session,
    });
  }
}

function errorPage(req, res) {
  res.render("errorPage", {
    title: "404! Page Not found",
    session: req.session,
  });
}

module.exports = {
  home: home,
  about: about,
  service: service,
  showService: showService,
  program: program,
  showProgram: showProgram,
  event: event,
  showEvent: showEvent,
  blog: blog,
  showBlog: showBlog,
  team: team,
  testimonial: testimonial,
  errorPage: errorPage,
  contactUs: contactUs,
  newsletter: newsletter,
  newsletterConfirmation: newsletterConfirmation,
  contactUsStore: contactUsStore,
};
