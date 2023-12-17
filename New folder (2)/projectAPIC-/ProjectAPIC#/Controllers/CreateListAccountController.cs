using Design.Entity;
using Infrastructure.ErrorHelper;
using Infrastructure.IServices;
using Infrastructure.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ProjectAPIC_.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CreateListAccountController : ControllerBase
    {
        private readonly ICreateAccount icr;
        public CreateListAccountController()
        {
            icr = new CreateAccServices();
        }

       
        [HttpPost("CreateLis")]

        public async Task<IActionResult> CreateListAccount(ListAcc listAccs)
        {
            var res = await icr.CreateAc(listAccs);
                return Ok("ThanhCong");
        }
        [HttpGet("getdata")]
        public IActionResult GetAccount() {
            var res = icr.getDataAll();
            return Ok(res);
        }
    }
}
