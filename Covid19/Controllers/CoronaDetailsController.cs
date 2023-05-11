using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using DAL.Models;
using BLL;
using System.Net;

namespace Covid19.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CoronaDetailsController : ControllerBase
    {
        ICoronaDetailsBll bll;
        public CoronaDetailsController (ICoronaDetailsBll _bll)
        {
            this.bll = _bll;
        }
        [HttpPost("AddCoronaDetails")]
        public IActionResult AddCoronaDetails(CoronaDetail newCoronaDetail)
        {
            return Ok(bll.AddCoronaDetails(newCoronaDetail));
        }

        [HttpGet("GetAllCoronaDetails")]
        public IActionResult GetAllCoronaDetails()
        {
            return Ok(bll.GetAllCoronaDetails());
        }

        [HttpGet("GetCoronaDetailsByID/{ID}")]
        public IActionResult GetCoronaDetailsByID(string ID)
        {
            return Ok(bll.GetCoronaDetailsById(ID));
        }



      [HttpPut("AddVaccination/{ID}")]
        public IActionResult AddVaccination(string ID,CoronaDetail vacc)
        {
            return Ok(bll.AddVaccination(ID,vacc));
        }


        [HttpPut("AddCovid19/{ID}")]
        public IActionResult AddCovid19(string ID, CoronaDetail vacc)
        {
            return Ok(bll.AddCovid19(ID, vacc));
        }

        [HttpGet("Notvaccinated")]
        public IActionResult Notvaccinated()
        {
            return Ok(bll.Notvaccinated());
        }

        [HttpGet("ActivePatients")]
        public IActionResult ActivePatients()
        {
            return Ok(bll.ActivePatients());
        }
    }
}
