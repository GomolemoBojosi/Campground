using API.Data;
using API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CampgroundController : Controller
    {
        private readonly DataContext _context;

        public CampgroundController(DataContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Campground>>> GetCampgrounds()
        {
            var result = await _context.Campgrounds.ToListAsync();
            return Ok(result);
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Campground>> GetCampgroundById(int id)
        {
            var result = await _context.Campgrounds.FindAsync(id);
            return Ok(result);
        }
    }
}
