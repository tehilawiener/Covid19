using BLL;
using DAL.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Covid19.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HMOmemberController : ControllerBase
    {
        IHMOmemberBll bll;
        public HMOmemberController(IHMOmemberBll bll)
        {
            this.bll = bll;
        }

        [HttpPost("AddHMOmember")]
        public IActionResult AddHMOmember(Hmomember newHmomember)
        {
            return Ok(bll.AddHMOmember(newHmomember));
        }

        [HttpGet("GetAllHMOmembers")]
        public IActionResult GetAllHMOmembers()
        {
            return Ok(bll.GetAllHMOmember());
        }

        [HttpGet("GetHMOmemberByID/{ID}")]
        public IActionResult GetHMOmemberByID(string ID)
        {
            return Ok(bll.GetHMOmemberById(ID));
        }


    }
}

    
