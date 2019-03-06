using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SweepingManagement.Controllers
{
    public class SweepingController : Controller
    {
        // GET: Sweeping
        public ActionResult Users()
        {
            return View();
        }

        // GET: Sweeping
        public ActionResult Companies()
        {
            return View();
        }
    }
}