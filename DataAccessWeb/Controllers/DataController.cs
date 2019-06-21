using DataAccessWeb.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessWeb.Controllers
{
    public class DataController : Controller
    {
        private readonly StudentServices student_services;

        public DataController(StudentServices services)
        {
            this.student_services = services;
        }

        public async Task<IActionResult> Index()
        {
            var scores = await this.student_services.GetAllScoresAsync();
            return Json(scores);
        }
    }
}
