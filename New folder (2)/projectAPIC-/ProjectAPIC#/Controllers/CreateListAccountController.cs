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

        [HttpPost("CreateList")]
        public async Task<IActionResult> CreateListAccounts(List<ListAcc> listAccs)
        {
            var res = await icr.CreateAcc(listAccs);
            if(res == ErrorHel.thanhCong)
            {
                return Ok("ThanhCong");
            }else if(res == ErrorHel.thatBai)
            {
                return BadRequest("thatBai");
            }
            else
            {
                return BadRequest("thatBai");
            }
        }
    }
}
