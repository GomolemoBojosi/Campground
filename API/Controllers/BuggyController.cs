using API.Data;
using API.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class BuggyController : BaseApiController
    {
        private readonly DataContext _context;

        public BuggyController(DataContext context)
        {
            _context = context;
        }

        [Authorize]
        [HttpGet("auth")]
        public ActionResult<string> GetSecret()
        {
            return "secret text";
        }     
        
        [HttpGet("not-found")]
        public ActionResult<AppUser> GetNotFound()
        {
            var entity = _context.Users.Find(-1);

            if (entity == null)
            {
                return NotFound();
            }

            return Ok(entity);

        }

        [HttpGet("server-error")]
        public ActionResult<string> GetServerError()
        {
            var entity = _context.Users.Find(-1);

            var returnedEntity = entity.ToString();

            return Ok(returnedEntity);
        }

        [HttpGet("bad-request")]
        public ActionResult<string> GetBadRequest()
        {
            return BadRequest("Invalid request");
        }
    }
}
